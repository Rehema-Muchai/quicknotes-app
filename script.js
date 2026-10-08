// 1. Select elements
const form = document.querySelector("#note-form");
const input = document.querySelector("#note-input");
const categorySelect = document.querySelector("#note-category");
const errorMessage = document.querySelector("#error-message");
const searchInput = document.querySelector("#search-input");
const notesList = document.querySelector("#notes-list");
const noteCount = document.querySelector("#note-count");
const clearAllBtn = document.querySelector("#clear-all-btn");

const STORAGE_KEY = "quicknotes-data";

// 2. Load notes from localStorage
let notes = loadNotes();

function loadNotes() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : [];
}

function saveNotes() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

// 3. Render function
function render(notesToRender = notes) {
  notesList.innerHTML = ""; // Clear current list

  if (notesToRender.length === 0 && searchInput.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = "No notes match your search.";
    li.style.color = "#666";
    li.style.padding = "16px";
    notesList.appendChild(li);
  } else {
    notesToRender.forEach((note) => {
      const li = document.createElement("li");
      li.classList.add("note-card", `category-${note.category}`);

      const contentDiv = document.createElement("div");
      contentDiv.classList.add("note-content");

      const textSpan = document.createElement("span");
      textSpan.textContent = note.text; // Safe from XSS

      const metaDiv = document.createElement("div");
      metaDiv.classList.add("note-meta");
      metaDiv.textContent = `${note.category.toUpperCase()} • ${note.createdAt}`;

      contentDiv.appendChild(textSpan);
      contentDiv.appendChild(metaDiv);

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("delete-btn");
      deleteBtn.addEventListener("click", () => deleteNote(note.id));

      li.appendChild(contentDiv);
      li.appendChild(deleteBtn);
      notesList.appendChild(li);
    });
  }

  updateCount();
  clearAllBtn.style.display = notes.length > 0 ? "block" : "none";
}

function updateCount() {
  if (notes.length === 0) noteCount.textContent = "You have no notes yet.";
  else if (notes.length === 1) noteCount.textContent = "You have 1 note.";
  else noteCount.textContent = `You have ${notes.length} notes.`;
}

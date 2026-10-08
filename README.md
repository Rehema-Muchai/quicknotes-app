# QuickNotes

QuickNotes is a simple, responsive web application designed to help you capture, organize, and manage your daily thoughts, tasks, and ideas. Built with vanilla HTML, CSS, and JavaScript, it provides a clean, distraction-free interface that saves your data locally in your browser.

## Features
- **Add Notes**: Create notes with custom categories (Personal, Work, Study).
- **Validation**: Prevents empty notes or notes exceeding 200 characters with clear error messages.
- **Search**: Instantly filter your notes as you type.
- **Persistence**: Notes are automatically saved to `localStorage`, so they survive page refreshes.
- **Responsive Design**: Looks great on both desktop and mobile devices.
- **Clear All**: A bonus feature to safely delete all notes with a confirmation prompt.

## How to Run Locally
1. Clone or download this repository to your computer.
2. Open the folder in Visual Studio Code.
3. Install the "Live Server" extension if you haven't already.
4. Right-click on `index.html` and select "Open with Live Server".
5. The app will open in your default web browser.

## What I Learned
1. **DOM Manipulation**: How to dynamically create, style, and remove HTML elements using `document.createElement` and `textContent` to prevent XSS attacks.
2. **Event Handling**: Using `addEventListener` for form submissions, input changes, and button clicks, including `event.preventDefault()` to stop page reloads.
3. **Data Persistence**: How to use `localStorage` combined with `JSON.stringify()` and `JSON.parse()` to save and retrieve complex data structures like arrays of objects.
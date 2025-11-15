# TopicSearch – React Component

A clean, responsive, user-friendly component that displays a list of topics and allows users to filter them in real-time using a search bar. 

## Features

- **Real-time search filtering** (case-insensitive)
- **Responsive grid layout** for topic cards
- **Attractive, modern UI** with soft shadows, spacing, and hover effects
- **Shows all topics when search input is empty**
- **Displays “No topics found”** when no match exists
- **Fully accessible** (label, ARIA roles, semantic HTML)
- **Simple, clean architecture**
- **Zero external UI libraries** — pure React + CSS

## Project Structure

topic-search/
├── src/
│ ├── App.js
│ ├── TopicSearch.js
│ ├── styles.css
│ ├── index.js
│ └── data.js
├── package.json
├── README.md
└── public/

##  Installation & Running

### 1️⃣ Install Node.js  
Download from: https://nodejs.org

### 2️⃣ Create the project  
npx create-react-app topic-search

### 3️⃣ Replace the files inside src/ with the files from this project.

### 4️⃣ Start the app
npm start
App will open automatically at:
http://localhost:3000

## How It Works

### ✔ Topic List
Topics are stored in data.js as an array of objects:
{ name: "React Basics", category: "Frontend" }

### ✔ Filtering Logic

As the user types, the list filters in real-time:

Search includes (not exact match)

Search is case-insensitive

Empty input → show all topics

No match → show “No topics found”

### ✔ UI

Clean card layout

Smooth hover animation

Responsive grid

Professional color palette

Padding + rounded corners + shadows


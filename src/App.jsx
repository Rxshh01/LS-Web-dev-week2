// src/App.jsx
import React, { useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({ id: null, title: '', content: '' });
  const [isDarkMode, setIsDarkMode] = useState(false);

  const addNote = (note) => {
    if (currentNote.id) {
      setNotes(notes.map((n) => (n.id === currentNote.id ? note : n)));
      setCurrentNote({ id: null, title: '', content: '' });
    } else {
      setNotes([...notes, note]);
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const editNote = (note) => {
    setCurrentNote(note);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App container mt-5 ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Note Taking App</h1>
        <button className="btn btn-secondary" onClick={toggleTheme}>
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>
      <NoteForm addNote={addNote} currentNote={currentNote} />
      <NoteList notes={notes} deleteNote={deleteNote} editNote={editNote} />
    </div>
  );
}

export default App;

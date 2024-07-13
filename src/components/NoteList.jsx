// src/components/NoteList.jsx
import React from 'react';

function NoteList({ notes, deleteNote, editNote }) {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <div key={note.id} className="card mb-3">
          <div className="card-body">
          
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.content}</p>
            <button onClick={() => editNote(note)} className="btn btn-secondary mr-2">
              Edit
            </button>
            <button onClick={() => deleteNote(note.id)} className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NoteList;

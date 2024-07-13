// src/components/NoteForm.jsx
import React, { useState, useEffect } from 'react';

function NoteForm({ addNote, currentNote }) {
  const [note, setNote] = useState({ id: null, title: '', content: '' });

  useEffect(() => {
    setNote(currentNote);
  }, [currentNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.title.trim() && note.content.trim()) {
      addNote({
        ...note,
        id: note.id ? note.id : Date.now(),
      });
      setNote({ id: null, title: '', content: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          value={note.title}
          onChange={(e) => setNote({ ...note, title: e.target.value })}
        />
      </div>
      <div className="form-group">
        <textarea
          className="form-control"
          placeholder="Content"
          value={note.content}
          onChange={(e) => setNote({ ...note, content: e.target.value })}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary btn-block">
        {note.id ? 'Update Note' : 'Add Note'}
      </button>
    </form>
  );
}

export default NoteForm;

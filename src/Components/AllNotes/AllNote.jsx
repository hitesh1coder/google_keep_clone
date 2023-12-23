import React, { useContext, useState } from "react";
import styles from "./allnotes.module.css";
import NoteContext from "../../Context/NotesContext";
import NoteCard from "../NoteCard/NoteCard";

const AllNotes = () => {
  const { notes, setNotes } = useContext(NoteContext);
  const [editingNote, setEditingNote] = useState(null);

  const handleDeleteNote = (id) => {
    if (window.confirm("Do you want to delete this note?")) {
      const filterNotes = notes.filter((note) => note.id !== id);
      setNotes(filterNotes);
      localStorage.setItem("notes-keep", JSON.stringify(filterNotes));
    }
  };
  const onEditNote = (note) => {
    setEditingNote(note);
  };

  const onSaveNote = (updatedNote) => {
    const updatedNotes = notes.map((note) => {
      note.id === updatedNote.id ? updatedNote : note;
    });
    setNotes(updatedNotes);
    localStorage.setItem("notes-keep", JSON.stringify(updatedNotes));
    setEditingNote(null);
  };
  return (
    <div className={styles.notes_container}>
      {notes?.map((note) => {
        return (
          <NoteCard
            key={note.id}
            note={note}
            deleteNote={handleDeleteNote}
            editNote={onEditNote}
            saveNote={onSaveNote}
            editing={editingNote?.id === note.id}
          />
        );
      })}
    </div>
  );
};

export default AllNotes;

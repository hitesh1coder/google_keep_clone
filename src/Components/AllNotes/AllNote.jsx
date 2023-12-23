import React, { useContext, useState } from "react";
import styles from "./allnotes.module.css";
import NoteContext from "../../Context/NotesContext";
import NoteCard from "../NoteCard/NoteCard";

const AllNotes = () => {
  const { notes, setNotes, searchQuery } = useContext(NoteContext);
  const [editingNote, setEditingNote] = useState(null);

  const handleDelete = (id) => {
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
      if (note.id === updatedNote.id) {
        return updatedNote;
      }
      return note;
    });
    setNotes(updatedNotes);
    localStorage.setItem("notes-keep", JSON.stringify(updatedNotes));
    setEditingNote(null);
  };

  const queryNotes = notes.filter((note) => {
    if (searchQuery) {
      return (
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.content.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else {
      return notes;
    }
  });

  return (
    <div className={styles.notes_container}>
      {queryNotes?.map((note) => {
        return (
          <NoteCard
            key={note.id}
            note={note}
            deleteNote={handleDelete}
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

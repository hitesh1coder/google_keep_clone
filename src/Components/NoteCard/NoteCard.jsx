import React, { useState } from "react";
import styles from "./notecard.module.css";
import deleteIcon from "../../assets/icons8-delete-30.png";
import editIcon from "../../assets/icons8-edit-48.png";

const NoteCard = ({ note, deleteNote, editNote, saveNote, editing }) => {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleSaveNote = () => {
    const updatedNote = { ...note, title, content };
    saveNote(updatedNote);
  };

  return (
    <div className={styles.note_card} style={{ backgroundColor: note.bgColor }}>
      {editing ? (
        <>
          <input
            className={styles.title_input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className={styles.content_input}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button className={styles.save_btn} onClick={handleSaveNote}>
            Save
          </button>
        </>
      ) : (
        <>
          <h3 className={styles.note_title}>{note.title}</h3>
          <p className={styles.note_content}>{note.content}</p>

          <img
            src={editIcon}
            alt="edit-icon"
            className={styles.edit_icon}
            onClick={() => editNote(note)}
          />
          <img
            src={deleteIcon}
            alt="delete-icon"
            className={styles.delete_icon}
            onClick={() => deleteNote(note.id)}
          />
        </>
      )}
    </div>
  );
};

export default NoteCard;

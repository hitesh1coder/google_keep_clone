import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./createnote.module.css";
import NoteContext from "../../Context/NotesContext";
import addIcon from "../../assets/icons8-add-30.png";

const CreateNode = () => {
  const { notes, setNotes } = useContext(NoteContext);

  const [expanded, setExpanded] = useState(false);

  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const bgColorRef = useRef(null);

  const handleExpanded = () => {
    setExpanded(true);
  };

  const addNote = (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const content = contentRef.current.value;
    const bgColor = bgColorRef.current.value;

    if (title === "" || content === "") {
      setExpanded(false);
      return alert("Please enter a title and content");
    }

    const newNote = {
      id: new Date().toString(),
      title,
      content,
      bgColor,
    };

    setNotes([newNote, ...notes]);
    localStorage.setItem("notes-keep", JSON.stringify([newNote, ...notes]));

    titleRef.current.value = "";
    contentRef.current.value = "";
    setExpanded(false);
  };
  return (
    <div className={styles.container}>
      <form onSubmit={addNote}>
        <input
          ref={titleRef}
          type="text"
          name="title"
          placeholder="Title"
          autoComplete="off"
          className={styles.note_title}
          onClick={handleExpanded}
        />
        {expanded && (
          <>
            <textarea
              ref={contentRef}
              name="content"
              id="content"
              cols=""
              rows=""
              placeholder="Take a notes..."
              className={styles.content}
            />

            <label htmlFor="colorInput">
              Choose Color :
              <input
                ref={bgColorRef}
                type="color"
                id="color"
                defaultValue="#dfdfdf"
                className={styles.color_input}
              />
            </label>
            <button type="submit" className={styles.btn}>
              <img src={addIcon} alt="add-icon" />
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default CreateNode;

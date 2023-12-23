import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./createnote.module.css";
import NoteContext from "../../Context/NotesContext";

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
    if (titleRef.current.value === "" || contentRef.current.value === "") {
      setExpanded(false);
      return alert("Please enter some tilte & content");
    }

    setNotes([
      ...notes,
      {
        id: new Date().toString(),
        title: titleRef.current.value,
        content: contentRef.current.value,
        bgColor: bgColorRef.current.value,
      },
    ]);
    localStorage.setItem(
      "notes-keep",
      JSON.stringify([
        ...notes,
        {
          id: new Date().toString(),
          title: titleRef.current.value,
          content: contentRef.current.value,
          bgColor: bgColorRef.current.value,
        },
      ])
    );
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
              ➕
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default CreateNode;

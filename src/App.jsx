import React, { useState } from "react";
import "./App.css";
import { Header, CreateNode, AllNotes } from "./Components/index";

import NoteContext from "./Context/NotesContext.js";

const App = () => {
  //Global States
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes-keep") || "[]")
  );
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, searchQuery, setSearchQuery }}
    >
      <div className="container">
        <Header />
        <CreateNode />
        <AllNotes />
      </div>
    </NoteContext.Provider>
  );
};

export default App;

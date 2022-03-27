import axios from "axios";
import { useState } from "react";
const note = [
  { id: 1, content: "HTML is good", date: "jueves", important: false },
  { id: 2, content: "HTML is bad", date: "martes", important: true },
];

export const App = () => {
  axios
    .get("http://localhost:3001/names")
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

  const [setNote, setStateNotes] = useState(note);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("crear nota");
    const noteToAddState = {
      id: setNote.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    };
    console.log(noteToAddState);
    setStateNotes([...setNote, noteToAddState]);
    setNewNote("");
  };

  const handleShowAll = () => {
    setShowAll(() => !showAll);
  };
  return (
    <div>
      <h1>Notes</h1>
      <button onClick={handleShowAll}>
        {showAll ? "Show All" : "Show All Important"}
      </button>
      <ol>
        {setNote
          .filter((note) => {
            if (showAll === true) return true;
            return note.important === true;
          })
          .map(({ content, date }, index) => {
            return (
              <div key={index}>
                <li>
                  <p>{content}</p>
                  <small>
                    <time>{date}</time>
                  </small>
                </li>
              </div>
            );
          })}
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button>Crear Nota</button>
      </form>
      <ul>{}</ul>
    </div>
  );
};

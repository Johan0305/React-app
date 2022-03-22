import { useState } from "react";
const note = [
  { id: 1, content: "HTML is good", date: "jueves", important: false },
  { id: 2, content: "HTML is bad", date: "martes", important: true },
];

export const App = () => {
  const [setNote, setStateNotes] = useState(note);
  const [newNote, setNewNote] = useState("");

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleClick = (event) => {
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
  return (
    <div>
      <h1>Notes</h1>
      <ol>
        {setNote.map(({ id, content, date }) => {
          return (
            <div key={id}>
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
      <div>
        <input type="text" onChange={handleChange} value={newNote} />
        <button onClick={handleClick}>Crear Nota</button>
      </div>
    </div>
  );
};

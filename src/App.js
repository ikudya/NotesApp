import React, {useState} from "react";
import './App.css';
import NoteContainer from "./components/NoteContainer/NoteContainer";
import SideBar from "./components/SideBar/SideBar";

function App() {

    const [notes, setNotes] = useState([])
    const addNote = (color) => {
        const tempNotes = [...notes]
        tempNotes.push({
            id:Date.now() + "" + Math.floor(Math.random()*78),
            text: "",
            time: Date.now(),
            color,
        });
        setNotes(tempNotes);
    };

    return (
        <div className="App">
            <SideBar addNote={addNote}/>
            <NoteContainer notes={notes}/>
        </div>
    );
}

export default App;

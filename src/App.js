import React from "react";
import './App.css';
import NoteContainer from "./components/NoteContainer/NoteContainer";
import SideBar from "./components/SideBar/SideBar";

function App() {
    return (
        <div className="App">
            <SideBar/>
            <NoteContainer/>
        </div>
    );
}

export default App;

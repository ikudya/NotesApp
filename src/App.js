import React,{useState} from "react";
import './App.css';
import NoteContainer from "./components/NoteContainer/NoteContainer";
import SideBar from "./components/SideBar/SideBar";

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className="App">
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <NoteContainer/>
        </div>
    );
}

export default App;

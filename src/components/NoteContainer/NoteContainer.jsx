import React from "react";
import Note from "../Note/Note";
import {H2, NoteContainerNotes, NotesContainer} from "./NoteContainerElement";

const NoteContainer = () => {
    return(
        <NotesContainer>
            <H2>Notes</H2>
            <NoteContainerNotes  >
                <Note note={{
                    text: "Hello World",
                    time: "4:32PM",
                    color: "red"
                }}/>
                <Note note={{
                    text: "Hello World",
                    time: "4:32PM",
                    color: "red"
                }}/>
                <Note note={{
                    text: "Hello World",
                    time: "4:32PM",
                    color: "red"
                }}/>
                <Note note={{
                    text: "Hello World",
                    time: "4:32PM",
                    color: "red"
                }}/>
                <Note note={{
                    text: "Hello World",
                    time: "4:32PM",
                    color: "red"
                }}/>
                <Note note={{
                    text: "Hello World",
                    time: "4:32PM",
                    color: "red"
                }}/>
                <Note note={{
                    text: "Hello World",
                    time: "4:32PM",
                    color: "red"
                }}/>
                <Note note={{
                    text: "Hello World",
                    time: "4:32PM",
                    color: "red"
                }}/>
                <Note note={{
                    text: "Hello World",
                    time: "4:32PM",
                    color: "red"
                }}/>
                <Note note={{
                    text: "Hello World",
                    time: "4:32PM",
                    color: "red"
                }}/>
                <Note note={{
                    text: "Hello World",
                    time: "4:32PM",
                    color: "red"
                }}/>
                <Note note={{
                    text: "Hello World",
                    time: "4:32PM",
                    color: "red"
                }}/>
            </NoteContainerNotes>
        </NotesContainer>
    )
}
export default NoteContainer;
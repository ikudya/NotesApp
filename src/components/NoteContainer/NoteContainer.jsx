import React from "react";
import Note from "../Note/Note";
import {H2, NoteContainerNotes, NotesContainer} from "./NoteContainerElement";

const NoteContainer = (props) => {
    const RA = (arr) => {
        const array = []
        for (let i = arr.length - 1; i >= 0; --i) {
            array.push(arr[i])
        }
        return array;
    };
    const notes = RA(props.notes);

    return (
        <NotesContainer>
            <H2>Notes</H2>
            <NoteContainerNotes>
                {
                    notes?.length>0?
                        ( notes.map((item) =>
                        <Note
                        key={item.id}
                        note={item}/>)
                    ):(<h3>No Notes present</h3>)}
            </NoteContainerNotes>
        </NotesContainer>
    )
}
export default NoteContainer;
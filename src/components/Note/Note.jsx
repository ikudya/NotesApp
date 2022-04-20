import React from "react";
import {NoteText, NoteWrapper, Text} from "./NoteElement";

const Note = (props) => {

    return (
        <NoteWrapper style={{backgroundColor: props.note.color}}>
            <NoteText defaultValue={props.note.text}/>
            <Text>{props.note.time}</Text>
        </NoteWrapper>
    )
}
export default Note;
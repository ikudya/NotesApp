import React from "react";
import {NoteText, NoteWrapper, Text, NtFooter, IMG} from "./NoteElement";
import DeleteIcon from "../../img/delete.png";

let timer = 500, timeout;
const Note = (props) => {
    const formatDate = (value) => {
        if (!value) return ""
        const date = new Date(value);
        const monthNames = [
            'Jan', 'Feb', 'March', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Nov', 'Dec'
        ];
        let hrs = date.getHours()
        let amPm = hrs > 12 ? "PM" : "AM";
        hrs = hrs ? hrs : "12";
        hrs = hrs > 12 ? (hrs = 24 - hrs) : hrs;

        let min = date.getMinutes();
        min = min < 10 ? "0" + min : min;

        let day = date.getDate();
        const month = monthNames[date.getMonth()];

        return `${hrs}:${min} ${amPm} ${day} ${month}`;
    };
    const debounce = (func) => {
        clearTimeout(timeout)
        timeout = setTimeout(func, timer);
    };
    const updateText=(text,id)=>{
        debounce(()=>props.updateText(text,id));
    };

    return (
        <NoteWrapper style={{backgroundColor: props.note.color}}>
            <NoteText defaultValue={props.note.text}
                      onChange={(event) =>updateText(event.target.value, props.note.id)}/>
            <NtFooter>
                <Text>{formatDate(props.note.time)}</Text>
                <IMG src={DeleteIcon}
                     alt="delete"
                     onClick={() => props.deleteNote(props.note.id)}
                />
            </NtFooter>
        </NoteWrapper>
    )
}
export default Note;
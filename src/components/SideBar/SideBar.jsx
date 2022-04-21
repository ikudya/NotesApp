import React, {useState} from "react";
import {SideBarWrapper, IMG, SBList, SBLItem, PlusNote} from "./SideBarElement";
import plusIcon from '../../img/add-button.png'

const SideBar = (props) => {
    const color = ["#fe9b72", "#fec971", "#00d1fe", "#b693fd", "#e4ee91"]
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <SideBarWrapper >
                <IMG src={plusIcon} alt="add" isOpen={isOpen} onClick={()=> toggle() + console.log(isOpen)}/>
            <SBList isOpen={isOpen}>
                {color.map((item, index) =>
                        <SBLItem key={index} style={{backgroundColor: item}}
                                 onClick={()=>props.addNote(item)}
                        />)}
            </SBList>
        </SideBarWrapper>
    )
}
export default SideBar;
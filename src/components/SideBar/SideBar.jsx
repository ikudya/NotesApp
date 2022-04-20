import React, {useState} from "react";
import {SideBarWrapper, IMG, SBList, SBLItem} from "./SideBarElement";
import plusIcon from '../../img/add-button.png'

const SideBar = () => {
    const color = ["#fe9b72", "#fec971", "#00d1fe", "#b693fd", "#e4ee91"]
    const [listOpen, setListOpen] = useState(false);
    const toggle = () => {
        setListOpen(!listOpen)
    }
    return (
        <SideBarWrapper>
            <IMG src={plusIcon} alt="add" onClick={toggle}/>
            <SBList>
                {
                    color.map((item, index) =>
                        <SBLItem key={index} style={{backgroundColor: item}}
                        />)
                }
            </SBList>
        </SideBarWrapper>
    )
}
export default SideBar;
import { useState } from "react";
import { useDispatch } from "react-redux";
import { EditTask } from "./redux/actions";
import ReactModal from "react-modal";

export const EditComp = ({el}) => {
    const [open, SetOpen] = useState(false);
    const [textt, SetTextt] = useState(el.text);
    const Dispatch = useDispatch();
    const HandleEdit = () => {
        let newtask = {id:el.id, text: textt, isdone: el.isDone}
        Dispatch(EditTask(newtask))
        handleshow()
    }
    const handleshow = () => {
        SetOpen(!open)
    }
    return(
        <>
        <button onClick={handleshow} > Edit </button>
        <ReactModal isOpen ={open} >
            <input value={textt} onChange = {(e) => SetTextt(e.target.value)}/>
            <button onClick={HandleEdit} > Submit </button>
            <button onClick={handleshow}>Close</button>
        </ReactModal>
        </>
    )
}
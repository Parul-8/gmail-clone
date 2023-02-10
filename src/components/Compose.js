import React, { useState } from "react";
import { addDoc, collection } from 'firebase/firestore';
import { serverTimestamp } from "firebase/firestore";
import RemoveIcon from '@material-ui/icons/Remove';
import CloseIcon from '@material-ui/icons/Close';
import HeightIcon from '@material-ui/icons/Height';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import FormatColorTextIcon from '@material-ui/icons/FormatColorText';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import LinkIcon from '@material-ui/icons/Link';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import PhotoIcon from '@material-ui/icons/Photo';
import PhonelinkLockIcon from '@material-ui/icons/PhonelinkLock';
import CreateIcon from '@material-ui/icons/Create';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from "react-redux";
import { closeComposeMessage } from "../features/mailSlice";
import { db } from "./firebase";
import { selectUser } from "../features/userSlice";

import "../css/compose.css";

function Compose() {
    const [to, setTo] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const dispatch = useDispatch();

    const user = useSelector(selectUser);
    console.log(user);

    // const formSubmit = (e) => {
    //     e.preventDefault();
    //     if (to == "") {
    //         return alert("To is required");
    //     }
    //     if (subject == "") {
    //         return alert("Subject is required");
    //     }
    //     if (message == "") {
    //         return alert("Message is required");
    //     }

    //     db.collections("emails").set({
    //         to: to,
    //         subject: subject,
    //         message: message,
    //         timestamp: firebase.firestore.FieldValue.serverTimeStamp()
    //     });

    //     alert("email sent");
    // }

    const formSubmit = (e) => {
        e.preventDefault();
        if (to == "") {
            return alert("To is required");
        }
        if (subject == "") {
            return alert("Subject is required");
        }
        if (message == "") {
            return alert("Message is required");
        }

        const fromName = (user.displayName || "User");

        const emailCollectionRef = collection(db, 'emails')
        addDoc(emailCollectionRef, {
            to,
            subject,
            message,
            from: user?.email,
            fromName: fromName,
            timestamp: serverTimestamp()
        })
            .then(response => { console.log(response.id) })
            .catch(error => console.log(error.message))

        setTo("");
        setSubject("");
        setMessage("");
        dispatch(closeComposeMessage());



    }

    return (
        <div className="compose">
            <div className="compose__header">
                <div className="compose__header__left">
                    <span>New Message</span>
                </div>
                <div className="compose__header__right">
                    <RemoveIcon />
                    <HeightIcon />
                    <CloseIcon onClick={() => dispatch(closeComposeMessage())} />
                </div>

            </div>

            <form onSubmit={formSubmit}>
                <div classname="compose__body">
                    <div className="compose__bodyForm">
                        <input type="email" placeholder="Recipients" value={to} onChange={(e) => setTo(e.target.value)} />
                        <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                        <textarea rows="20" onChange={(e) => setMessage(e.target.value)} >{message}</textarea>
                    </div>

                </div>

                <div className="compose__footer">
                    <div className="compose__footer__Left">
                        <button type="submit">Send <ArrowDropDownIcon /></button>
                    </div>

                    <div className="compose__footer__Right">
                        <FormatColorTextIcon />
                        <AttachFileIcon />
                        <LinkIcon />
                        <InsertEmoticonIcon />
                        <NoteAddIcon />
                        <PhotoIcon />
                        <PhonelinkLockIcon />
                        <CreateIcon />
                        <MoreVertIcon />
                        <DeleteIcon />


                    </div>

                </div>
            </form>
        </div >
    )
}
export default Compose;
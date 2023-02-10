import React from "react";

import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { openMessage } from "../features/mailSlice";


import "../css/emailList.css";

function EmailBody({ name, email, subject, message, time }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const seeMail = () => {
        dispatch(openMessage({
            name,
            email,
            subject,
            message,
            time
        }))

        navigate('/mail')
    }

    return (
        <div className="emailBody" onClick={seeMail}>
            <div className="emailBody__left">
                <CheckBoxOutlineBlankIcon />
                <StarBorderIcon />
                <LabelImportantIcon />
                <h4>{email}</h4>

            </div>

            <div className="emailBody__middle">
                <div className="emailBody__middle__msg">
                    <p><b>{subject}</b> {message}</p>
                </div>

            </div>

            <div className="emailBody__right">
                <p> {time}</p>

            </div>
        </div>
    )
}
export default EmailBody;
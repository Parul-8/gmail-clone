import React from 'react'

import { IconButton, Avatar } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PrintIcon from '@material-ui/icons/Print';
import LaunchIcon from '@material-ui/icons/Launch';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import StarIcon from '@material-ui/icons/Star';
import ReplyIcon from '@material-ui/icons/Reply';
import { useNavigate } from 'react-router-dom';
import { selectedMail } from "../features/mailSlice";
import { useSelector } from 'react-redux';

import "../css/emailList.css";

function EmailDetails() {

    const mail = useSelector(selectedMail);
    const navigate = useNavigate();

    return (
        <div className="emailDetail">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <IconButton>
                        <ArrowBackIcon onClick={() => navigate('/')} />
                    </IconButton>

                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>

                    <IconButton>
                        <RefreshIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>


                </div>

                <div className="emailList__settingsRight">
                    <p>1-50 of 200</p>
                    <IconButton>
                        <ChevronLeftIcon></ChevronLeftIcon>
                    </IconButton>

                    <IconButton>
                        <ChevronRightIcon></ChevronRightIcon>
                    </IconButton>

                </div>

            </div>


            <div className='emailDetails__message'>
                <div className="emailDetails__header">
                    <div className="emailDetails__headerLeft">
                        <h4>{mail.subject}</h4>

                        <IconButton><LabelImportantIcon /></IconButton>
                    </div>
                    <div className="emailDetails__headerRight">
                        <IconButton><PrintIcon /></IconButton>
                        <IconButton><LaunchIcon /></IconButton>

                    </div>

                </div>

                <div className="emailDetails__middleheader">
                    <div className="emailDetails__middleheaderLeft">
                        <IconButton><Avatar /></IconButton>
                        <h4>{mail.name}</h4>
                        <p>{mail.email}</p>
                    </div>
                    <div className="emailDetails__middleheaderRight">
                        <p>{mail.time}</p>
                        <IconButton><StarIcon /></IconButton>
                        <IconButton><ReplyIcon /></IconButton>
                        <IconButton><MoreVertIcon /></IconButton>

                    </div>
                </div>
                <div className="emailDetails__body">
                    <p>{mail.message}</p>
                </div>

            </div>
        </div>
    )
}
export default EmailDetails;
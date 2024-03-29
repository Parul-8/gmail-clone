import React from "react";

import { IconButton } from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


import "../css/emailList.css";

function EmailListSetting() {
    return (
        <div className="emailList__settings">
            <div className="emailList__settingsLeft">
                <IconButton>
                    <CheckBoxOutlineBlankIcon />
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
    )
}
export default EmailListSetting;
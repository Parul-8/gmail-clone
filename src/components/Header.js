import React from "react";
import ReorderIcon from '@material-ui/icons/Reorder';
import { Avatar, IconButton } from '@material-ui/core';
import SearchButton from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutline from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import firebase from 'firebase/compat/app';
import logo from '../Pmail_Logo.png';

import "../css/header.css";

const Header = () => {

    const user = useSelector(selectUser);
    console.log(user);
    return (
        <div className="header">

            <div className="header__left">
                <IconButton>
                    <ReorderIcon></ReorderIcon>
                </IconButton>
                <img src={logo} alt="logo"></img>

            </div>

            <div className="header__middle">
                <div className="search_mail">
                    <IconButton>
                        <SearchButton></SearchButton>
                    </IconButton>
                    <input type="text" palceholder="Search"></input>
                    <IconButton>
                        <ExpandMoreIcon></ExpandMoreIcon>
                    </IconButton>


                </div>
            </div>

            <div className="header__right">
                <IconButton>
                    <HelpOutline></HelpOutline>
                </IconButton>
                <IconButton>
                    <SettingsIcon></SettingsIcon>
                </IconButton>
                <IconButton>
                    <AppsIcon></AppsIcon>
                </IconButton>
                <Avatar src={user?.photoURL} onClick={() => firebase.auth().signOut()}></Avatar>
            </div>


        </div >
    )
}
export default Header
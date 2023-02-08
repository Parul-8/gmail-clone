import React, { useEffect } from 'react';

import './App.css';
import EmailList from './components/EmailList';
import EmailDetails from './components/EmailDetails';
import Header from './components/Header.js'
import Sidebar from './components/Sidebar';
import Compose from './components/Compose';
import Login from './components/Login.js'
import { useSelector } from 'react-redux';
import { selectComposeMessage } from './features/mailSlice'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { auth } from "./components/firebase";
import { selectUser, signin, signout } from './features/userSlice';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const isMessageOpen = useSelector(selectComposeMessage);
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {

      user ? (
        dispatch(signin({
          displayName: user.displayName,
          photoURL: user.photoURL,
          email: user.email,
        }))
      ) : (dispatch(signout()))


    })
  }, [])

  return (
    <Router>
      {
        user ?
          (<div className="App">
            <Header />

            <div className="app__body">
              <Sidebar />

              <Routes>
                <Route exact path="/" element={<EmailList />}>

                </Route>

                <Route path="/mail" element={<EmailDetails />}>

                </Route>
              </Routes>


            </div>
            {
              isMessageOpen && <Compose />
            }


          </div >)
          : (<Login />)
      }





    </Router>
  );
}

export default App;

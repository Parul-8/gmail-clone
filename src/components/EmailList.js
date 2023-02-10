import React, { useEffect, useState } from "react";
import EmailBody from "./EmailBody";
import EmailListSetting from "./EmailListSetting";
import EmailType from "./EmailType";
import { db } from "./firebase";


import "../css/emailList.css";

function EmailList() {

    const [emails, setEmails] = useState([]);
    useEffect(() => {
        db.collection("emails").orderBy("timestamp", "desc").onSnapshot(snapshot => {
            setEmails(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, []) //empty dependency shows that useEffect will run only once after loading the page

    console.log(emails);
    return (
        <div className="emailList">
            <EmailListSetting />
            <EmailType />

            {
                emails.map(({ id, data }) => {
                    return <EmailBody key={id} name={data.fromName} email={data.from} subject={data.subject} message={data.message} time={new Date(data.timestamp?.seconds * 1000).toLocaleTimeString()} />
                })
            }




        </div>
    )
}
export default EmailList;
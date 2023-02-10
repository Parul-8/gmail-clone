import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCy3jP8AS_z4XzAbarW_RIhmv1QPH-bxqs",
    authDomain: "pmail-88.firebaseapp.com",
    projectId: "pmail-88",
    storageBucket: "pmail-88.appspot.com",
    messagingSenderId: "928881629720",
    appId: "1:928881629720:web:483579a393cc907dd8016d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
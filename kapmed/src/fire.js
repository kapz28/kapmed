import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCnQ3WLy-ma7U3c7X0zyZZgh4zIxihdY5g",
    authDomain: "kapmed-b9047.firebaseapp.com",
    databaseURL: "https://kapmed-b9047-default-rtdb.firebaseio.com",
    projectId: "kapmed-b9047",
    storageBucket: "kapmed-b9047.appspot.com",
    messagingSenderId: "123050282296",
    appId: "1:123050282296:web:7f73d40d0ffe6e241505cd",
    measurementId: "G-QCP9NC6W4K"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCma_3JsmgIQeIAnx7i3ajkQOPHFSTJRuI",
    authDomain: "lets-chat-web-app-2-81f39.firebaseapp.com",
    projectId: "lets-chat-web-app-2-81f39",
    storageBucket: "lets-chat-web-app-2-81f39.appspot.com",
    messagingSenderId: "887869044567",
    appId: "1:887869044567:web:e0bef61c278fa753f7b012",
    measurementId: "G-FGLE469P8Q"
  };

  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}




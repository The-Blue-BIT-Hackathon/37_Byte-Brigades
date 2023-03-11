import { initializeApp } from 'firebase/app'

import {
    getDatabase, ref, set, onValue, get, child
}from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyDTbVXdbcNdfLM4bninNCNkw_qHhOcu5es",
    authDomain: "mess-3a90c.firebaseapp.com",
    databaseURL: "https://mess-3a90c-default-rtdb.firebaseio.com",
    projectId: "mess-3a90c",
    storageBucket: "mess-3a90c.appspot.com",
    messagingSenderId: "267416052298",
    appId: "1:267416052298:web:af4c6431b93903f60c3cb3"
  };


  
// init firebase app
const app = initializeApp(firebaseConfig)

//init database
// function wirteUserData(userId, name, email, password) {
//     const db = getDatabase();
//     const referance = ref(db, 'users/' + userId);  

//     set(referance, {
//         username: name,
//         email: email,
//         password: password
//     });
// }

// wirteUserData("Joel", "joel", "joelalph@yahoo.com", "12345");

const dbRef = ref(getDatabase());
get(child(dbRef, `users/${userId=Swaraj}`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

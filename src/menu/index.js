// Initialize Firestore client
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDTbVXdbcNdfLM4bninNCNkw_qHhOcu5es",
    authDomain: "mess-3a90c.firebaseapp.com",
    projectId: "mess-3a90c",
    storageBucket: "mess-3a90c.appspot.com",
    messagingSenderId: "267416052298",
    appId: "1:267416052298:web:af4c6431b93903f60c3cb3"
  };
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

import { doc, getDoc } from "firebase/firestore";

const docRef = doc(db, "Admin", "name");
const docSnap = await getDoc(docRef);
docsSnap.forEach(doc => {
    console.log(doc.data());
    menu.push(doc.data())
})
if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}

// const admin = require('firebase-admin');
// const serviceAccount = require('./path/to/serviceAccountKey.json');
// admin.initializeApp({
//   credential: cert(serviceAccount)
// });


// // Create query to retrieve all users
// const usersRef = db.collection('Admin');
// const query = usersRef.get();

// // Execute query and log user names
// query.then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//     console.log(doc.id, '=>', doc.data().name);
//     console.log(doc.id, '=>', doc.data().price);
//   });
// });

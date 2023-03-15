import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, onSnapshot,
    addDoc
} from 'firebase/firestore'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, onAuthStateChanged
} from 'firebase/auth'
import{
  ref, set
}from'firebase/database'
const firebaseConfig = {
    apiKey: "AIzaSyDTbVXdbcNdfLM4bninNCNkw_qHhOcu5es",
    authDomain: "mess-3a90c.firebaseapp.com",
    projectId: "mess-3a90c",
    storageBucket: "mess-3a90c.appspot.com",
    messagingSenderId: "267416052298",
    appId: "1:267416052298:web:af4c6431b93903f60c3cb3"
  };

const app = initializeApp(firebaseConfig)

const db = getFirestore()
const auth = getAuth()

const colRef = collection(db, 'Profile')

onSnapshot(colRef, (snapshot)=> {
    let Profile = []
    snapshot.docs.forEach((doc)=>{
        Profile.push({...doc.data(), id: doc.id})
    })
    console.log(Profile)
})


const signupForm = document.querySelector('.signup')
signupForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const name = signupForm.name.value
  const email = signupForm.email.value
  const password = signupForm.password.value

  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      const uid = cred.user.uid;

      addDoc(colRef, {
        name: signupForm.name.value,
        email: signupForm.email.value,
        password: signupForm.password.value
      })

      console.log('user created:', cred.user)
      signupForm.reset()
      
    })
    // window.location ="preferences.html"
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const uid = userCredential.user.uid;
      firebase.database().ref('users/' + uid).set({
        email: email,
        lastLogin: new Date().getTime()
      })
      window.location.href ='www.google.com';
    })
  // onAuthStateChanged(user => {
  //     if(user) {
  //       window.location = 'preferences.html';
  //     }
  
  //   })
  })

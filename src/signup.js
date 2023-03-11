import {initializeApp} from 'firebase/app'
import{
    getFirestore, collection, onSnapshot,addDoc
}from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider  } from '@firebase/auth'


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
  signupForm.addEventListener('submit', (e) =>{
    e.preventDefault()
  
    const name = signupForm.name.value
    const email = signupForm.email.value
    const password = signupForm.password.value

    addDoc(colRef, {
        name: signupForm.name.value,
        email: signupForm.email.value,
        password : signupForm.password.value
    })
    createUserWithEmailAndPassword(auth, name, email, password)
    .then((cred) =>{
        console.log('user created:', cred.user)
        signupForm.reset()
    })
    .catch((err) => {
        console.log(err.message)
    })
  })


  const auth1 = getAuth();
  signInWithPopup(auth1, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
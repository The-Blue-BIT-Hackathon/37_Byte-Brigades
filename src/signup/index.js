import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, onSnapshot,
    addDoc, setDoc, doc
} from 'firebase/firestore'
import {
  getAuth,
  createUserWithEmailAndPassword, onAuthStateChanged
} from 'firebase/auth'

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

var user = auth.currentUser;

const colRef = collection(db, 'Profile')

onSnapshot(colRef, (snapshot)=> {
    let Profile = []
    snapshot.docs.forEach((doc)=>{
        Profile.push({...doc.data(), id: doc.id})
    })
    console.log(Profile)
  })

// signing users up
const signupForm = document.querySelector('.signup')
signupForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const name = signupForm.name.value
  const email = signupForm.email.value
  const password = signupForm.password.value

  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
    //   docRef.doc("ABC").set({
    //     name: name,
    //     email: email,
    //     password: password
    // })
      // addDoc(colRef, {
      //   name: signupForm.name.value,
      //   email: signupForm.email.value,
      //   password: signupForm.password.value
      //   // createdAt: serverTimestamp()
      // })
      const data = {
        name: name,
        email: email,
        password: password
      }
      setDoc(doc(db, "Profile", name), data)
      console.log('user created:', cred.user)
      signupForm.reset()
      // window.location = "preferences.html"
    })
    .catch((err) => {
      alert(err.message)
    })
})

onAuthStateChanged(auth, (user) => {
  console.log('user status changed:', user)
})
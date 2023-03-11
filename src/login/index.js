import { initializeApp } from 'firebase/app'
import { getFirestore, collection, onSnapshot } from '@firebase/firestore'
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth'

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

  const loginForm = document.querySelector('.login')
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
  
    const email = loginForm.email.value
    const password = loginForm.password.value
  
    signInWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        console.log('user logged in:', cred.user)
        window.location = "index.html"
      })
      .catch((err) => {
        alert(err.message)
      })
  
  })
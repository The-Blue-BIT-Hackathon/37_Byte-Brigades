import {initializeApp} from 'firebase/app'
import{
    getFirestore, collection, onSnapshot,
    addDoc,deleteDoc, doc,
    query, where,
    orderBy,
}from 'firebase/firestore'
import{
    getAuth  ,
    createUserWithEmailAndPassword,
    signOut, signInWithEmailAndPassword,
    onAuthStateChanged
}from'firebase/auth'
import{getDatabase, ref} from'firebase/database'
const firebaseConfig = {
    apiKey: "AIzaSyDTbVXdbcNdfLM4bninNCNkw_qHhOcu5es",
    authDomain: "mess-3a90c.firebaseapp.com",
    projectId: "mess-3a90c",
    storageBucket: "mess-3a90c.appspot.com",
    messagingSenderId: "267416052298",
    appId: "1:267416052298:web:af4c6431b93903f60c3cb3"
  };

  //init firebase app
 initializeApp(firebaseConfig)

 //init services
const db = getFirestore()
const auth = getAuth()
  
// function writeUserData(userId, name, email, password)
const db1 = getDatabase()
const reference = ref(db1, 'users/' + userId)

 //collection ref
 const colRef = collection(db, 'Profile')

//  const q = query(colRef, where("name", "==", "Charul"), orderBy('name', 'desc'))
 //get collection data

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
  
    const email= signupForm.email.value
    const password = signupForm.password.value

    addDoc(colRef, {
        email: signupForm.email.value,
        password : signupForm.password.value
    })
    createUserWithEmailAndPassword(auth, email, password)
    .then((cred) =>{
        console.log('user created:', cred.user)
        window.location = "preferences.html"
        signupForm.reset()
    })
    .catch((err) => {
        console.log(err.message) 
    })
  })

//   const logoutButton = document.querySelector('.logout')
//   logoutButton.addEventListener('click', ()=>{
//     signOut(auth)
//     .then(() => {
//         console.log('the user signed out')
//     })
//     .catch((err) =>{
//         console.log(err.message)
//     })
//   })

//   const loginForm = document.querySelector('.login')
//   loginForm.addEventListener('submit', (e) =>{
//     e.preventDefault()

//     const email= loginForm.email.value
//     const password = loginForm.password.value

//     signInWithEmailAndPassword(auth, email, password)
//     .then((cred)=>{
//         console.log('user logged in:', cred.user)
//         window.location = "preferences.html"
//     })
//     .catch((err) =>{
//         console.log(err.message)
//     })
//   })
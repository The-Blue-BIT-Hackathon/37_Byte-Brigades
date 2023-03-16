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

const colRef = collection(db, 'Admin')

onSnapshot(colRef, (snapshot)=> {
    let Admin = []
    snapshot.docs.forEach((doc)=>{
        Admin.push({...doc.data(), id: name})
    })
    console.log(Admin)
  })

// signing users up
const menuName = document.querySelector('.add')
menuName.addEventListener('submit', (e) => {
  e.preventDefault()

const name = menuName.name.value;
const price = menuName.price.value;
var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
var dietaryRestrictions = [];
checkboxes.forEach(function(checkbox) {
  dietaryRestrictions.push(checkbox.id);
});

const data = {
    name :  menuName.name.value,
    price : menuName.price.value,
    dietaryRestrictions: dietaryRestrictions,
  }
  setDoc(doc(db, "Admin", name), data)
})  
onSnapshot(colRef, (snapshot)=> {
    let Admin = []
    snapshot.docs.forEach((doc)=>{
        Admin.push({...doc.data(), id:menuName.name.valuem, })
    })
    console.log(Admin)
  })
onAuthStateChanged(auth, (user) => {
  console.log('user status changed:', user)
})

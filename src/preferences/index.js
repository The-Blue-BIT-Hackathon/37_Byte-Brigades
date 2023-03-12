import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, onSnapshot,
    addDoc
} from 'firebase/firestore'
import {
  getAuth, onAuthStateChanged
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

  if (user) {
    // User is signed in.
    console.log(user)
  } else {
    // No user is signed in.
    console.log("NO")
  }

  const colRef = collection(db, 'Preferences')

  onSnapshot(colRef, (snapshot)=> {
    let Preferences = []
    snapshot.docs.forEach((doc)=>{
        Preferences.push({...doc.data(), id: doc.id})
    })
    console.log(Preferences)
  })

const pref = document.querySelector('.pref')
pref.addEventListener('submit', (e) => {
    e.preventDefault()

    addDoc((colRef), {
        card: selectedCards,
    }) 
    .then(() => {
        window.location = "login.html"
    })

})

onAuthStateChanged(auth, (user) => {
  console.log('user status changed:', user)
})

// var selectedCards = [];

// function toggleSelection(cardType) {
//     var card = document.querySelector('.' + cardType);
//     if (selectedCards.includes(cardType)) {
//         card.classList.remove('selected');
//         selectedCards.splice(selectedCards.indexOf(cardType), 1);
//         console.log("unselected")
//         console.log(selectedCards)
//     } else {
//         card.classList.add('selected');
//         selectedCards.push(cardType);
//         console.log(cardType)
//         console.log("selected")
//         console.log(selectedCards)
//     }
//     document.getElementById('preferences').value = selectedCards.join(',');
// }
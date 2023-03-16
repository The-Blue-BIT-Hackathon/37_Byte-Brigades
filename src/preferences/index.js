import {initializeApp} from 'firebase/app'
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

initializeApp(firebaseConfig)

  const db = getFirestore()
  const auth = getAuth()
  var user = auth.currentUser;

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log("logged in")
      console.log(uid)
      
    } else {
      console.log("logged out")
    }
  });

  const colRef = collection(db, 'Admin')

  onSnapshot(colRef, (snapshot)=> {
    let Admin = []
    snapshot.docs.forEach((doc)=>{
        Admin.push({...doc.data(), id: doc.id})
    })
    console.log(Admin)
  })

const pref = document.querySelector('.pref')
pref.addEventListener('submit', (e) => {
    e.preventDefault()

    addDoc((colRef), {
        menu: selectedCards,

    }) 

})


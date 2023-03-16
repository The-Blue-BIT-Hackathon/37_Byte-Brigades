import {initializeApp} from 'firebase/app'
import {
    getFirestore, collection, onSnapshot,
    addDoc, querySnapshot, doc, getDocs
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

  const auth = getAuth()
  var user = auth.currentUser;
  
  var menu = []
  const db = getFirestore();
  const colRef = collection(db, 'Admin')
  const docsSnap = await getDocs(colRef);
  docsSnap.forEach(doc => {
    console.log(doc.data());
    menu.push(doc.data())
})

  console.log(menu)
  


  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log("logged in")
      console.log(uid)
      
    } else {
      console.log("logged out")
    }
  });

  

  onSnapshot(colRef, (snapshot)=> {
    let Admin = []
    snapshot.docs.forEach((doc)=>{
        Admin.push({...doc.data(), id: doc.id})
    })
    console.log(Admin)
  })

// var docRef = collection('Admin').doc('myDocument');
// var selectedCards = [];


// selectedCards.forEach(function(card) {
//   docRef.update({
//     selectedCards: arrayUnion(card)
//   }).then(function() {
//     console.log('Card ' + card + ' added to array in Firestore!');
//   }).catch(function(error) {
//     console.error('Error adding card ' + card + ' to array:', error);
//   });
// });
// var selectedCards = [];

// 		function toggleSelection(cardType) {
// 			var card = document.querySelector('.' + cardType);
// 			if (selectedCards.includes(cardType)) {
// 				card.classList.remove('selected');
// 				selectedCards.splice(selectedCards.indexOf(cardType), 1);

// 			} else {
// 				card.classList.add('selected');
// 				selectedCards.push(cardType);
// 			}
// 			document.getElementById('preferences').value = selectedCards.join(',');
// 		}
const pref = document.querySelector('.pref')
pref.addEventListener('submit', (e) => {
    e.preventDefault()

    addDoc((colRef), {
        menu:selectedCards,

        // id : user,
    }) 
    .then(() => {
        window.location = "preferences.html"
    })

})
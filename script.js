const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const loginButton = document.querySelector('#login-button');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;
  // TODO: validate email and password
  // TODO: send request to server to authenticate user
});

loginButton.addEventListener('click', () => {
  form.submit();
});


// const button = document.getElementById('login');

// button.addEventListener('click', () => {
//   window.location.href = 'login.html';
// });

function redirectToLogin() {
    window.location.href = "login.html";
  }
function redirectToSignUp() {
    window.location.href = "signup.html";
  }
function redirectToPreference() {
    window.location.href = "preferences.html";
  }
function redirectToExplore() {
    window.location.href = "explore.html";
  }

  function redirectToHome() {
    window.location.href = "index.html";
  }

  var selectedCards = [];

  function toggleSelection(cardType) {
    var card = document.querySelector('.' + cardType);
    if (selectedCards.includes(cardType)) {
      card.classList.remove('selected');
      selectedCards.splice(selectedCards.indexOf(cardType), 1);
    } else {
      card.classList.add('selected');
      selectedCards.push(cardType);
    }
    document.getElementById('preferences').value = selectedCards.join(',');
  }

  function goToExplore() {
    var selectedPreferences = selectedCards.join(',');
    window.location.href = 'explore.html?preferences=' + selectedPreferences;
  }
  


const priceSlider = document.getElementById("price-slider");
const priceValue = document.getElementById("price-value");

priceValue.textContent = priceSlider.value;

priceSlider.addEventListener("input", function() {
  priceValue.textContent = priceSlider.value;
});

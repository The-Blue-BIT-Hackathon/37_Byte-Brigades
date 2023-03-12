
var preferencesParam = new URLSearchParams(window.location.search).get('preferences');
var selectedPreferences = preferencesParam ? preferencesParam.split(',') : [];


const indianSnacksData = [
  {
    name: "Samosa",
    ingredients: ["potatoes", "peas", "spices", "flour"],
    veg: true,
    nonVeg: false,
    lactoseFree: true,
    glutenFree: false,
    peanutFree: false,
    soyFree: true,
    eggFree: true,
    fishFree: true,
    image: "https://via.placeholder.com/300x200"
  },
  {
    name: "Dhokla",
    ingredients: ["gram flour", "sour yogurt", "spices", "water"],
    veg: true,
    nonVeg: false,
    lactoseFree: false,
    glutenFree: true,
    peanutFree: true,
    soyFree: true,
    eggFree: true,
    fishFree: true,
    image: "https://via.placeholder.com/300x200"
  },
  {
    name: "Vada pav",
    ingredients: ["potatoes", "bread", "spices", "chutney"],
    veg: true,
    nonVeg: false,
    lactoseFree: true,
    glutenFree: false,
    peanutFree: true,
    soyFree: true,
    eggFree: true,
    fishFree: true,
    image: "https://via.placeholder.com/300x200"
  },

];

const indianMainCourseData = [
  {
    name: "Butter chicken",
    ingredients: ["chicken", "butter", "cream", "tomatoes"],
    veg: false,
    nonVeg: true,
    lactoseFree: false,
    glutenFree: true,
    peanutFree: true,
    soyFree: true,
    eggFree: true,
    fishFree: true,
    image: "https://via.placeholder.com/300x200"
  },
  {
    name: "Palak paneer",
    ingredients: ["spinach", "paneer", "spices", "cream"],
    veg: true,
    nonVeg: false,
    lactoseFree: false,
    glutenFree: true,
    peanutFree: true,
    soyFree: true,
    eggFree: true,
    fishFree: true,
    image: "https://via.placeholder.com/300x200"
  },
  {
    name: "Biryani",
    ingredients: ["rice", "meat or vegetables", "spices", "yogurt"],
    veg: true,
    nonVeg: true,
    lactoseFree: false,
    glutenFree: true,
    peanutFree: true,
    soyFree: true,
    eggFree: true,
    fishFree: true,
    image: "https://via.placeholder.com/300x200"
  },

];

const beveragesData = [
  {
    name: "Chai",
    ingredients: ["tea leaves", "milk", "sugar"],
    veg: true,
    nonVeg: false,
    lactoseFree: false,
    glutenFree: true,
    peanutFree: true,
    soyFree: true,
    eggFree: true,
    fishFree: true,
    image: "https://via.placeholder.com/300x200"
  },
  {
    name: "Lassi",
    ingredients: ["yogurt", "milk", "sugar", "fruit"],
    veg: true,
    nonVeg: false,
    lactoseFree: false,
    glutenFree: true,
    peanutFree: true,
    soyFree: true,
    eggFree: true,
    fishFree: true,
    image: "https://via.placeholder.com/300x200"
  },
  {
    name: "Thandai",
    ingredients: ["milk", "almonds", "cashews", "sugar", "spices"],
    veg: true,
    nonVeg: false,
    lactoseFree: false,
    glutenFree: true,
    peanutFree: false,
    soyFree: true,
    eggFree: true,
    fishFree: true,
    image: "https://via.placeholder.com/300x200"
  },

];

//filter options

const vegetarianFilter = document.getElementById("vegetarian-filter");
const nonVegetarianFilter = document.getElementById("non-vegetarian-filter");
const lactoseFreeFilter = document.getElementById("lactose-free-filter");
const glutenFreeFilter = document.getElementById("gluten-free-filter");
const peanutFreeFilter = document.getElementById("peanut-free-filter");
const soyFreeFilter = document.getElementById("soy-free-filter");
const eggFreeFilter = document.getElementById("egg-free-filter");
const fishFreeFilter = document.getElementById("fish-free-filter");

//user preferences


let vegetarian = false;
let nonVeg = false;
let lactoseFree = false;
let glutenFree = false;
let peanutFree = false;
let soyFree = false;
let eggFree = false;
let fishFree = false;
  

// Parse the preferences parameter from the URL

// Filter the items based on the selected preferences
var items = [
  {name: 'Item 1', category: 'Category A'},
  {name: 'Item 2', category: 'Category B'},
  {name: 'Item 3', category: 'Category C'},
  {name: 'Item 4', category: 'Category A'},
  {name: 'Item 5', category: 'Category B'},
  {name: 'Item 6', category: 'Category C'},
];
var filteredItems = items.filter(function(item) {
  return selectedPreferences.includes(item.category);
});

// Display the filtered items on the page
var itemList = document.getElementById('itemList');
filteredItems.forEach(function(item) {
  var listItem = document.createElement('li');
  listItem.textContent = item.name;
  itemList.appendChild(listItem);
});

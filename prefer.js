const foodData = [
  { name: "Pasta with tomato sauce", ingredients: ["pasta", "tomato sauce"], vegetarian: true, glutenFree: false, image: "penne-pasta-300x200.jpg" },
  { name: "Grilled chicken sandwich", ingredients: ["chicken", "bread", "lettuce", "tomato"], vegetarian: false, glutenFree: false, image: "Sandwich-chicken-avocado-alfalfa-300x200.jpg" },
  { name: "Vegetable stir-fry", ingredients: ["broccoli", "carrots", "peppers", "rice"], vegetarian: true, glutenFree: true, image: "vegetable-stir-fry-300x200.jpg" },
  { name: "Gluten-free pizza", ingredients: ["gluten-free crust", "tomato sauce", "cheese", "toppings"], vegetarian: true, glutenFree: true, image: "pizza.png" },
  {
    name: "Samosa",
    ingredients: ["potatoes", "peas", "spices", "flour"],
    vegetarian: true,
    nonVeg: false,
    lactoseFree: true,
    glutenFree: false,
    peanutFree: false,
    // soyFree: true,
    // eggFree: true,
    // fishFree: true,
    image: "samosa-300x200.jpg"
  },
  {
    name: "Dhokla",
    ingredients: ["gram flour", "sour yogurt", "spices", "water"],
    vegetarian: true,
    nonVeg: false,
    lactoseFree: false,
    glutenFree: true,
    peanutFree: true,
    // soyFree: true,
    // eggFree: true,
    // fishFree: true,
    image: "khaman-dhokla-traditional-gujrati-indian-snack-food-dish-de-focused-circle-background-cooking-gujarati-related-87454812.jpg"
  },
  {
    name: "Vada pav",
    ingredients: ["potatoes", "bread", "spices", "chutney"],
    vegetarian: true,
    nonVeg: false,
    lactoseFree: true,
    glutenFree: false,
    peanutFree: true,
    // soyFree: true,
    // eggFree: true,
    // fishFree: true,
    image: "indian-street-food-vada-pav.jpg"
  },
  {
    name: "Butter chicken",
    ingredients: ["chicken", "butter", "cream", "tomatoes"],
    veg: false,
    nonVeg: true,
    lactoseFree: false,
    glutenFree: true,
    peanutFree: true,
    // soyFree: true,
    // eggFree: true,
    // fishFree: true,
    image: "butter-chicken-indian-chicken-curry-dish.jpg"
  },
  {
    name: "Palak paneer",
    ingredients: ["spinach", "paneer", "spices", "cream"],
    veg: true,
    nonVeg: false,
    lactoseFree: false,
    glutenFree: true,
    peanutFree: true,
    // soyFree: true,
    // eggFree: true,
    // fishFree: true,
    image: "palak-paneer (1).jpg"
  },
  {
    name: "Biryani",
    ingredients: ["rice", "meat or vegetables", "spices", "yogurt"],
    veg: true,
    nonVeg: true,
    lactoseFree: false,
    glutenFree: true,
    peanutFree: true,
    // soyFree: true,
    // eggFree: true,
    // fishFree: true,
    image: "chicken-biryani-bp-300x200.jpg"
  },
  {
    name: "Chai",
    ingredients: ["tea leaves", "milk", "sugar"],
    veg: true,
    nonVeg: false,
    lactoseFree: false,
    glutenFree: true,
    peanutFree: true,
    // soyFree: true,
    // eggFree: true,
    // fishFree: true,
    image: "masala-tea-chai.jpg"
  },
  {
    name: "Lassi",
    ingredients: ["yogurt", "milk", "sugar", "fruit"],
    veg: true,
    nonVeg: false,
    lactoseFree: false,
    glutenFree: true,
    peanutFree: true,
    // soyFree: true,
    // eggFree: true,
    // fishFree: true,
    image: "360_F_194270717_AIoIBmIbottmji9AUyvwEDyMCdXNRAsR.jpg"
  },
  {
    name: "Thandai",
    ingredients: ["milk", "almonds", "cashews", "sugar", "spices"],
    veg: true,
    nonVeg: false,
    lactoseFree: false,
    glutenFree: true,
    peanutFree: false,
    // soyFree: true,
    // eggFree: true,
    // fishFree: true,
    image: "thandai-recipe-1-1-300x200.jpg"
  },
];

//filter options

const vegetarianFilter = document.getElementById("vegetarian-filter");
const nonVegetarianFilter = document.getElementById("non-vegetarian-filter");
const lactoseFreeFilter = document.getElementById("lactose-free-filter");
const glutenFreeFilter = document.getElementById("gluten-free-filter");
const peanutFreeFilter = document.getElementById("peanut-free-filter");
// const soyFreeFilter = document.getElementById("soy-free-filter");
// const eggFreeFilter = document.getElementById("egg-free-filter");
// const fishFreeFilter = document.getElementById("fish-free-filter");

//user preferences


let vegetarian = false;
let nonVeg = false;
let lactoseFree = false;
let glutenFree = false;
let peanutFree = false;
// let soyFree = false;
// let eggFree = false;
// let fishFree = false;

vegetarianFilter.addEventListener("click", () => {
  vegetarian = vegetarianFilter.checked;
  filterFoodItems();
});

glutenFreeFilter.addEventListener("click", () => {
  glutenFree = glutenFreeFilter.checked;
  filterFoodItems();
});

lactoseFreeFilter.addEventListener("click", () => {
  lactoseFree = lactoseFreeFilter.checked;
  filterFoodItems();
});

peanutFreeFilter.addEventListener("click", () => {
  peanutFree = peanutFreeFilter.checked;
  filterFoodItems();
});

const filterFoodItems = () => {
  const filteredFood = foodData.filter(food => {
    if (vegetarian && !food.vegetarian) {
      return false;
    }
    if (glutenFree && !food.glutenFree) {
      return false;
    }
    if (lactoseFree && !food.lactoseFree) {
      return false;
    }
    if (peanutFree && !food.peanutFree) {
      return false;
    }
    return true;
  });

  const recommendedFood = document.getElementById("recommended-food");
    recommendedFood.innerHTML = "";
  
    filteredFood.forEach(food => {
      const card = document.createElement("div");
      card.className = "prefcard";
      const image = document.createElement("img");
      image.src = food.image;
      const name = document.createElement("h3");
      name.textContent = food.name;
      const ingredients = document.createElement("p");
      ingredients.textContent = `Ingredients: ${food.ingredients.join(", ")}`;
      card.appendChild(image);
      card.appendChild(name);
      card.appendChild(ingredients);
      recommendedFood.appendChild(card);
    });
  };

  filterFoodItems();
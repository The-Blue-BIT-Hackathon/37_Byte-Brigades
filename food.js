// Sample data
const foodData = [
    { name: "Pasta with tomato sauce", ingredients: ["pasta", "tomato sauce"], vegetarian: true, glutenFree: false, image: "https://via.placeholder.com/300x200" },
    { name: "Grilled chicken sandwich", ingredients: ["chicken", "bread", "lettuce", "tomato"], vegetarian: false, glutenFree: false, image: "https://via.placeholder.com/300x200" },
    { name: "Vegetable stir-fry", ingredients: ["broccoli", "carrots", "peppers", "rice"], vegetarian: true, glutenFree: true, image: "https://via.placeholder.com/300x200" },
    { name: "Gluten-free pizza", ingredients: ["gluten-free crust", "tomato sauce", "cheese", "toppings"], vegetarian: true, glutenFree: true, image: "https://via.placeholder.com/300x200" },
  ];
  
  // Filter options
  const vegetarianFilter = document.getElementById("vegetarian-filter");
  const glutenFreeFilter = document.getElementById("gluten-free-filter");
  
  // User preferences
  let vegetarian = false;
  let glutenFree = false;
  
  // Update filter options when the user clicks on them
  vegetarianFilter.addEventListener("click", () => {
    vegetarian = vegetarianFilter.checked;
    filterFoodItems();
  });
  
  glutenFreeFilter.addEventListener("click", () => {
    glutenFree = glutenFreeFilter.checked;
    filterFoodItems();
  });
  
  // Filter food items based on user preferences
  const filterFoodItems = () => {
    const filteredFood = foodData.filter(food => {
      if (vegetarian && !food.vegetarian) {
        return false;
      }
      if (glutenFree && !food.glutenFree) {
        return false;
      }
      return true;
    });
  
    // Display filtered food items
    const recommendedFood = document.getElementById("recommended-food");
    recommendedFood.innerHTML = "";
  
    filteredFood.forEach(food => {
      const card = document.createElement("div");
      card.className = "card";
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
  
  // Initial display of recommended food items
  filterFoodItems();
  
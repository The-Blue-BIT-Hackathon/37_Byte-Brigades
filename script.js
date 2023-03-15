//Admin or Student login


$('#options').change(function() {
	var selectedOption = $(this).val();
	console.log('Selected option: ' + selectedOption);
	// Do something with the selected option
});


//to create card

function createCard(imageUrl, title, price) {
	// Create card element
	const card = document.createElement("div");
	card.classList.add("card");
  
	// Create image element
	const image = document.createElement("img");
	image.src = imageUrl;
	image.alt = "Product Image";
	image.classList.add("card-image");
	card.appendChild(image);
  
	// Create content element
	const content = document.createElement("div");
	content.classList.add("card-content");
	card.appendChild(content);
  
	// Create title element
	const titleElement = document.createElement("h3");
	titleElement.textContent = title;
	titleElement.classList.add("card-title");
	content.appendChild(titleElement);
  
	// Create price element
	const priceElement = document.createElement("p");
	priceElement.textContent = price;
	priceElement.classList.add("card-price");
	content.appendChild(priceElement);
  
	// Create switch element
	const switchToggle = document.createElement("label");
	switchToggle.classList.add("switch");
	content.appendChild(switchToggle);
  
	// Create input element
	const switchInput = document.createElement("input");
	switchInput.type = "checkbox";
	switchInput.classList.add("toggle-button");
	switchToggle.appendChild(switchInput);
  
	// Create slider element
	const slider = document.createElement("span");
	slider.classList.add("slider", "round");
	switchToggle.appendChild(slider);
  
	return card;
  }
  
  const products = [
	{imageUrl: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80.jpg", title: "Samosa", price: "$10.00"},
	{imageUrl: "https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80", title: "Sandwich", price: "$20.00"},
	{imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", title: "Pizza", price: "$30.00"}
  ];
  
  const container = document.querySelector(".container");
  container.style.display = "grid"; // Set the display property to "grid"
  container.style.gridTemplateColumns = "repeat(auto-fit, minmax(100px, 1fr))"; // Define the column widths
  container.style.gridColumnGap = "20px";
  
  products.forEach((product) => {
	const card = createCard(product.imageUrl, product.title, product.price);
	container.appendChild(card);
  });





  const availableFilter = document.getElementById("i");
  //user preferences
  
  let available = true;

  
  availableFilter.addEventListener("click", () => {
    available = false;
    filterFoodItems();
  });
   
  const filterFoodItems = () => {
    const filteredFood = foodData.filter(food => {
      if (available && !food.available) {
        return false;
      }
      return true;
    // addDoc((colRef), {
    //     card: selectedCards,
    //     id : user,
    // }) 
})
  
  
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
//Admin or Student login




//to create card

// function createCard(imageUrl, title, price) {
// 	// Create card element
// 	const card = document.createElement("div");
// 	card.classList.add("card");
  
// 	// Create image element
// 	const image = document.createElement("img");
// 	image.src = imageUrl;
// 	image.alt = "Product Image";
// 	image.classList.add("card-image");
// 	card.appendChild(image);
  
// 	// Create content element
// 	const content = document.createElement("div");
// 	content.classList.add("card-content");
// 	card.appendChild(content);
  
// 	// Create title element
// 	const titleElement = document.createElement("h3");
// 	titleElement.textContent = title;
// 	titleElement.classList.add("card-title");
// 	content.appendChild(titleElement);
  
// 	// Create price element
// 	const priceElement = document.createElement("p");
// 	priceElement.textContent = price;
// 	priceElement.classList.add("card-price");
// 	content.appendChild(priceElement);
  
// 	// Create switch element
// 	const switchToggle = document.createElement("label");
// 	switchToggle.classList.add("switch");
// 	content.appendChild(switchToggle);
  
// //	Create input element
// 	const switchInput = document.createElement("input");
// 	switchInput.type = "checkbox";
// 	switchInput.classList.add("toggle-button");
// 	switchToggle.appendChild(switchInput);
  
// 	// Create slider element
// 	const slider = document.createElement("span");
// 	slider.classList.add("slider", "round");
// 	switchToggle.appendChild(slider);
  
// 	return card;
//   }



//test


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

  // Add event listener to the input element
  switchInput.addEventListener("change", function() {
    console.log("Toggle switch is " + (this.checked ? "on" : "off"));
  });

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
    //     // Get the checkbox element
// $(document).ready(function() {
//     var createCardCheckbox = document.getElementById("createCardCheckbox");
//     // Add event listener to the checkbox
//     createCardCheckbox.addEventListener('change', function() {
//         if (this.checked) {
//             // Create a Bootstrap card
//             var cardDiv = document.createElement("div");
//             cardDiv.className = "card";
//             var cardBody = document.createElement("div");
//             cardBody.className = "card-body";
//             var cardTitle = document.createElement("h5");
//             cardTitle.className = "card-title";
//             cardTitle.textContent = "Card Title";
//             var cardText = document.createElement("p");
//             cardText.className = "card-text";
//             cardText.textContent = "This is the card content";
//             cardBody.appendChild(cardTitle);
//             cardBody.appendChild(cardText);
//             cardDiv.appendChild(cardBody);
//             // Add the card to the card container
//             var cardContainer = document.getElementById("cardContainer");
//             cardContainer.appendChild(cardDiv);
//         } else {
//             // Remove the card from the card container
//             var cardContainer = document.getElementById("cardContainer");
//             cardContainer.innerHTML = '';
//         }
//     });
// });


// $(document).ready(function() {
//     // Get the addRowCheckbox element
//     var addRowCheckbox = document.getElementById("addRowCheckbox");
//     // Add event listener to the checkbox
//     addRowCheckbox.addEventListener('change', function() {
//         if (this.checked) {
//             // Create a new row for the table
//             var newRow = document.createElement("tr");
//             var checkboxCell = document.createElement("td");
//             var checkboxInput = document.createElement("input");
//             checkboxInput.type = "checkbox";
//             checkboxCell.appendChild(checkboxInput);
//             newRow.appendChild(checkboxCell);
//             var textCell = document.createElement("td");
//             textCell.textContent = "New row text";
//             newRow.appendChild(textCell);
//             // Add the new row to the table
//             var tableBody = document.getElementById("tableBody");
//             tableBody.appendChild(newRow);
//         } else {
//             // Remove the last row from the table
//             var tableBody = document.getElementById("tableBody");
//             tableBody.removeChild(tableBody.lastChild);
//         }
//     });
// });


// $(document).ready(function() {
// 	// Get the checkboxes
// 	var checkboxes = document.querySelectorAll('input[type=checkbox]');
// 	// Add event listener to each checkbox
// 	for (var i = 0; i < checkboxes.length; i++) {
// 		checkboxes[i].addEventListener('change', function() {
// 			// Get the selected options table and body
// 			var selectedOptionsTable = document.getElementById("selectedOptionsTable");
// 			var selectedOptions = document.getElementById("selectedOptions");
// 			// If the checkbox is checked, add the value to the selected options table
// 			if (this.checked) {
// 				// Create a new row and cell
// 				var newRow = selectedOptions.insertRow();
// 				var newCell = newRow.insertCell();
// 				// Add the value to the new cell
// 				var newText = document.createTextNode(this.value);
// 				newCell.appendChild(newText);
// 				// Show the selected options table
// 				selectedOptionsTable.style.display = "block";
// 			} else {
// 				// If the checkbox is unchecked, remove the value from the selected options table
// 				var rowToRemove = null;
// 				// Loop through the rows of the selected options table
// 				for (var j = 0; j < selectedOptions.rows.length; j++) {
// 					// Get the cell value of the row
// 					var cellValue = selectedOptions.rows[j].cells[0].innerHTML;
// 					// If the cell value matches the checkbox value, mark the row for removal
// 					if (cellValue === this.value) {
// 						rowToRemove = selectedOptions.rows[j];
// 						break;
// 					}
// 				}
// 				// If a row was marked for removal, remove it and hide the selected options table if necessary
// 				if (rowToRemove !== null) {
// 					selectedOptions.deleteRow(rowToRemove.rowIndex - 1);
// 					if (selectedOptions.rows.length === 0) {
// 						selectedOptionsTable.style.display = "none";
// 					}
// 				}
// 			}
// 		});
// 	}
// });

$(document).ready(function() {
  // Get the checkboxes
  var checkboxes = document.querySelectorAll('input[type=checkbox]');
  // Add event listener to each checkbox
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', function() {
      // Get the selected options table and body
      var selectedOptionsTable = document.getElementById("selectedOptionsTable");
      var selectedOptions = document.getElementById("selectedOptions");
      // If the checkbox is checked, add the value to the selected options table
      if (this.checked) {
        // Create a new row and cells
        var newRow = selectedOptions.insertRow();
        var nameCell = newRow.insertCell();
        var priceCell = newRow.insertCell();
        // Add the values to the new cells
        var nameText = document.createTextNode(this.value);
        var priceText = document.createTextNode('$' + this.getAttribute('data-price'));
        nameCell.appendChild(nameText);
        priceCell.appendChild(priceText);
        // Show the selected options table
        selectedOptionsTable.style.display = "block";
      } else {
        // Find the row with the corresponding value and remove it
        var rows = selectedOptions.getElementsByTagName("tr");
        for (var i = 0; i < rows.length; i++) {
          if (rows[i].cells[0].textContent === this.value) {
            selectedOptions.deleteRow(i);
            break;
          }
        }
        // If there are no selected options left, hide the selected options table
        if (selectedOptions.rows.length === 0) {
          selectedOptionsTable.style.display = "none";
        }
      }
    });
  }
});


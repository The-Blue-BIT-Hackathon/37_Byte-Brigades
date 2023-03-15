$('#options').change(function() {
	var selectedOption = $(this).val();
	console.log('Selected option: ' + selectedOption);
	// Do something with the selected option
});

// $(document).ready(function() {
//     // Get the checkbox element
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
  

// Shopping list array
let groceryItems = ["Bread", "Milk", "Sugar", "Chocolate"];

// Display grocery items
function displayItems() {
  // Select the unordered list
  const unorderedList = document.querySelector("#itemList");
  // Clear the list to avoid duplicates
  unorderedList.innerHTML = "";

  // Iterate over each item
  groceryItems.forEach((item) => {
    // Create list elements
    const listItem = document.createElement("li");
    // Set the content of the current item
    listItem.innerHTML = item;

    // Create delete button
    const deleteBtn = document.createElement("span");
    deleteBtn.className = "delete";
    // Set the delete button symbol "x"
    deleteBtn.innerHTML = "\u00D7";
    // Append delete button to each list item
    listItem.appendChild(deleteBtn);

    // Append list item to the unordered list
    unorderedList.appendChild(listItem);
  });
  // Handle deletion of an item
  deleteItem();
}

// Set 2 items as checked by default
function setDefaultChecked() {
  // Select all list items
  const itemList = document.querySelectorAll("li");

  // Use indexing to select the second and third item
  // Once the class is added, the CSS file will style the items accordingly
  itemList[1].classList.add("checked");
  itemList[2].classList.add("checked");
}

displayItems();
setDefaultChecked();

// Add a new item
function addItem() {
  // Get the input value
  const newItem = document.getElementById("input").value.trim();

  // Check if input is empty
  if (newItem === "") {
    alert("Please enter an item");
  }
  // Add the new item to the array
  else {
    groceryItems.push(newItem);
  }

  // Clear the input field
  document.getElementById("input").value = "";
  // Display the updated list
  displayItems();
}

// Delete an item
function deleteItem() {
  // Select delete buttons
  const deleteButtons = document.getElementsByClassName("delete");

  // Iterate through delete buttons
  for (let i = 0; i < deleteButtons.length; i++) {
    // Add an event listener to each delete button
    deleteButtons[i].addEventListener("click", () => {
      // Remove the selected item from the array
      groceryItems.splice(i, 1);
      console.log(groceryItems);
      // Refresh the list display
      displayItems();
    });
  }
}

// Add a click event listener to the HTML element with the ID of "itemList"
document.getElementById("itemList").addEventListener("click", (e) => {
  // Check if the item's tag name is a list tag
  if (e.target.tagName === "LI") {
    // Toggle the checked class on the clicked element
    e.target.classList.toggle("checked");
  }
});

// Add a keyup event listener to the HTML element with the ID of "input"
document.getElementById("input").addEventListener("keyup", (e) => {
  // If the event key is equal to 'Enter', call the addItem function to add a new item to the list
  if (e.key === "Enter") {
    addItem();
  }
});

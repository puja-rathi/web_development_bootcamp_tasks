//declare and initialize array with four grocery items

const addButton = document.getElementById("addButton");
const inputelement = document.getElementById("additeminput");
let grocery_items = ["Salt","Sugar","Tea","Chilli"];


//get ul element by using getElementById
const itemslist = document.getElementById("itemslist");

//addItem function

const addItem = () =>{
    let additeminput = document.getElementById("additeminput").value;
    if(additeminput === ""){
        alert("First add the item!!");
    }
    else{
        grocery_items.push(additeminput);
        alert("Item added!!");
        
        displayItems();
        document.getElementById("additeminput").value="";
    } 
}

//declare function to display each array items as a list item
const displayItems = ()=>{

     // Clear the existing list
    itemslist.innerHTML = '';
   
    for(let i =0;i<grocery_items.length;i++){
        let listitem = document.createElement('li');

        // Create the span element
        let spanElement = document.createElement('span');
        spanElement.textContent = '\u00D7';
        spanElement.classList.add('delete');
        spanElement.addEventListener('click', deleteItem);

        // Append the span element to the list item

        listitem.textContent = grocery_items[i];
        listitem.appendChild(spanElement);
        itemslist.appendChild(listitem);
    }
    // Toggle the class to display the <p> tag
    let paratext = document.querySelector(".hide");
    paratext.classList.remove("hide");

    setDefaultChecked();
}

//deleteItem function

const deleteItem = (event) =>{
    const listitem = event.target.parentNode;
    const itemname = listitem.textContent.trim();
    listitem.remove();
    alert(`${itemname} removed!!`);
}

//declare function to set any two items as a bought items using css 
const setDefaultChecked = ()=>{
    //get 2nd, 3rd the list items
    const secondlistitem = document.querySelector("ul>li:nth-child(2)");
    secondlistitem.classList.add('bought');
    const thirdlistitem = document.querySelector("ul>li:nth-child(3)");
    thirdlistitem.classList.add('bought');

    // Apply a class to the first two items
    // listitems[1].style.color="green";
    // listitems[1].classList.add('bought');
}

addButton.addEventListener('click',addItem);
inputelement.addEventListener('keyup',function(e){
    if(e.key=="Enter"){
        addItem();
    }
});


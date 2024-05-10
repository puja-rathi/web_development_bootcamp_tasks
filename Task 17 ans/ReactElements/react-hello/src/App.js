import React from 'react';
import './App.css';
import pic from './images/pic.jpg';

// declare and intialize javascript object called user

const user = {
  name: "Pooja",
  surname: "Rathi",
  date_of_birth:"03 Aug 1992",
  address:"Reading",
  country:"United Kingdom",
  email:"pdjajal@yahoo.com",
  telephone:"7877584443",
  company:"HyperionDev",
  profile_picture: pic,
  shopping_cart:["Watch","Ring","Belt","Jeans"]
}

// variable element to get abd display user's info
const element = (
  <div className='userDetails'>
      <h2>User Details:</h2>
      <img src={user.profile_picture} alt = "my pic" />
      <p>First Name: {user.name}</p>
      <p>Last Name:{user.surname}</p>
      <p>Date of Birth: {user.date_of_birth}</p>
      <p>Address: {user.address}</p>
      <p>Country: {user.country}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.telephone}</p>
      <p>Company: {user.company}</p>
      <h3>Your shopping cart items:</h3>
      <ul>
        {
          user.shopping_cart.map((item,index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
  </div>
)

// create function named App to return element variable
function App() {
  return (
    <div className = "App">
        {element}
    </div>
  );
}

export default App;

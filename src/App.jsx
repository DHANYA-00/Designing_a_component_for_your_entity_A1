import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Usercard from './components/usercard.jsx';
import img from "./assets/Avatar.png"



function App() {
  const cards=[
    {
      name:"Shankar",
      email:"shankar@gamil.com",
      phonenumber:12345678,
      address:"36, gandhi street, chennai",
      image:img,
    },
    {
      name:"Abishek",
      email:"abishek@gamil.com",
      phonenumber:12345678,
      address:"36, Nehru street, chennai",
      image:img,
    },
    {
      name:"Lithish",
      email:"lithish@gamil.com",
      phonenumber:12345678,
      address:"36,  mosque street, chennai",
      image:img,
    },
    {
      name:"Rohan",
      email:"rohan@gamil.com",
      phonenumber:12345678,
      address:"36, dark street, chennai",
      image:img,
    },
    {
      name:"Joe Celaster",
      email:"celaster@gamil.com",
      phonenumber:12345678,
      address:"36, Church street street, chennai",
      image:img,
    },
  ]

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '16px',
    padding: '16px',
  };

  return (
    <div style={gridStyle}>
      {cards.map((i, index) => (
        <Usercard key={index} name={i.name} email={i.email} phonenumber={i.phonenumber} address={i.address} image={i.image}/>
      ))}
    </div>
  );
}

export default App;

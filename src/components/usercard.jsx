// write the component code here
import React from 'react'
import "../App.css"


function usercard({name,email,phonenumber,address,image,style}) {
  return (
        <div className='box'>

            <div className='profile'>
                <img src={image} alt="profile image" />
            </div>

            <div className='name'>
                <p><strong>Name:</strong>{name}</p>
            </div>

            <div className='email'>
                <p><strong>Email:</strong>{email}</p>
            </div>

            <div className='phno'>
                <p><strong>Phone number:</strong>{phonenumber}</p>
            </div>

            <div className='address'>
                <p><strong>Address:</strong>{address}</p>
            </div>

        </div>
  );
}


export default usercard;

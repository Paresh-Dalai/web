import React from 'react';
import './header.css'


export default function Header(){

     return (
        <div className='Upper-Heading'>
        <div className='header-left-side'>
            React
        </div>
        <div className='header-right-side'>
            <li>Home</li>
           <li>Signin / Signup</li> 
            <li>About</li>
          <li>Skills</li>  
        </div>
        </div>
     )

}
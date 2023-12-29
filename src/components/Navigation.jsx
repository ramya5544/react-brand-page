import React from 'react';

function Navigation(props) {
    return (
        <div>
            <nav className="container">
        <div className="logo">
          <img src="images/brand_logo.png" alt="logo_brand"/>
        </div>

        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>

        <button>login</button>
      </nav>
        </div>
    );
}

export default Navigation;
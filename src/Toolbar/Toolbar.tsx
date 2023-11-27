import React from "react";
import {NavLink} from "react-router-dom";

const Toolbar: React.FC = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="navLinks" to="/">Home</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Toolbar;

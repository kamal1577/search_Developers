import React from "react";
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Dev Finder <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/users"> Users </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

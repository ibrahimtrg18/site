import React from "react";
import { Link } from "gatsby";
import "./style.scss";

const Navbar = React.forwardRef((props, ref) => {
  return (
    <nav ref={ref} className="nav">
      <div className="navbar">
        <div className="title">Ibrahim Tarigan</div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
});

export default Navbar;

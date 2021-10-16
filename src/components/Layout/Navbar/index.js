import React from "react";
import { Link } from "gatsby";
import "./style.scss";

const Navbar = React.forwardRef((props, ref) => {
  const { title } = props;

  return (
    <nav ref={ref} className="nav">
      <div className="navbar">
        <div className="title">{title}</div>
        <ul>
          <li>
            <Link to="/" state={{ targetFragment: "about" }}>
              About
            </Link>
          </li>
          <li>
            <Link to="/" state={{ targetFragment: "project" }}>
              Project
            </Link>
          </li>
          <li>
            <Link to="/" state={{ targetFragment: "contact" }}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
});

export default Navbar;

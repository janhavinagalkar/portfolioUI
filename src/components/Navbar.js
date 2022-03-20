import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiCollapse } from "react-icons/bi";
import { BiExpand } from "react-icons/bi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [navTag, setNavTag] = useState("");

  useEffect(() => {
    sessionStorage.NavTag = "Home";
    setNavTag(sessionStorage.NavTag);
  }, []);

  const handleClick = (tag) => {
    setOpen(!open);
    setNavTag(tag);
    sessionStorage.NavTag = tag;
  };
  const customStyles = (tag) => {
    return {
      color: navTag === tag ? "#ae00ff" : "white",
      fontWeight: navTag === tag ? "600" : "500",
    };
  };
  return (
    <nav className="navbar">
      <motion.span whileHover={{ y: 5 }}>
        <Link to="/" className="nav-logo">
          JanhaviNagalkar
        </Link>
      </motion.span>
      <div onClick={() => handleClick()} className="nav-icon">
        {open ? (
          <BiCollapse style={{ fontSize: "x-large" }} />
        ) : (
          <BiExpand style={{ fontSize: "x-large" }} />
        )}
      </div>
      <ul className={open ? "nav-links active" : "nav-links"}>
        <motion.li className="nav-item" whileHover={{ y: 5 }}>
          <Link
            to="/"
            className="nav-link"
            onClick={() => handleClick("Home")}
            style={customStyles("Home")}
          >
            Home
          </Link>
        </motion.li>
        <motion.li className="nav-item" whileHover={{ y: 5 }}>
          <Link
            to="/About"
            className="nav-link"
            onClick={() => handleClick("About")}
            style={customStyles("About")}
          >
            About
          </Link>
        </motion.li>
        <motion.li className="nav-item" whileHover={{ y: 5 }}>
          <Link
            to="/TechSkills"
            className="nav-link"
            onClick={() => handleClick("Skills")}
            style={customStyles("Skills")}
          >
            Skills
          </Link>
        </motion.li>
        <motion.li className="nav-item" whileHover={{ y: 5 }}>
          <Link
            to="/Work"
            className="nav-link"
            onClick={() => handleClick("Work")}
            style={customStyles("Work")}
          >
            Work
          </Link>
        </motion.li>
        <motion.li className="nav-item" whileHover={{ y: 5 }}>
          <Link
            to="/Contact"
            className="nav-link"
            onClick={() => handleClick("Contact")}
            style={customStyles("Contact")}
          >
            Contact
          </Link>
        </motion.li>
      </ul>
    </nav>
  );
};

export default Navbar;

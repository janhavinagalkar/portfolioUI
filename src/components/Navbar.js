import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiCollapse } from "react-icons/bi";
import { BiExpand } from "react-icons/bi";
import { motion } from "framer-motion";
import { navbarData } from "./MockData";

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
        {navbarData && navbarData.length ? (
          navbarData.map((nav) => (
            <motion.li className="nav-item" whileHover={{ y: 5 }}>
              <Link
                to={process.env.PUBLIC_URL + `/${nav.routePath}`}
                className="nav-link"
                onClick={() => handleClick(nav.displayName)}
                style={customStyles(nav.displayName)}
              >
                {nav.displayName}
              </Link>
            </motion.li>
          ))
        ) : (
          <></>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

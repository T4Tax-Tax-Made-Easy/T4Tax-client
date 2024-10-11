import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#333", color: "#fff" }}>
      <Link to="/">Home</Link>
      <Link to="/blogs">Blogs</Link>
    </nav>
  );
};

export default Navbar;

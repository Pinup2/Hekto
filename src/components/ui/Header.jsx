import React from "react";

const Header = () => {
  return (
    <header>
      <div className="logo">Hekto</div>
      <nav>
        <ul>
          <li>
            <a href="/public">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

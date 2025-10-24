import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import arrow_icon from "../../assets/arrow_icon.png";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState({
    name: "usd",
    symbol: "$",
    flag: "🇺🇸",
  });

  const currencies = [
    { name: "usd", symbol: "$", flag: "🇺🇸" },
    { name: "eur", symbol: "€", flag: "🇪🇺" },
    { name: "inr", symbol: "₹", flag: "🇮🇳" },
  ];

  const handleSelect = (currency) => {
    setSelectedCurrency(currency);
    setCurrency({ name: currency.name, symbol: currency.symbol });
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to={"/"} className="logo-link">
          <img src={logo} alt="logo" className="logo" />
          <span className="brand-name">CryptoPlace</span>
        </Link>
      </div>

      <ul className="nav-links">
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>

      <div className="nav-right">
        {/* Custom Currency Dropdown */}
        <div className="currency-dropdown">
          <div
            className="currency-selected"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>{selectedCurrency.flag}</span>
            <p>{selectedCurrency.name.toUpperCase()}</p>
            <i
              className={`arrow ${isOpen ? "rotate" : ""}`}
            >▼</i>
          </div>

          {isOpen && (
            <div className="currency-menu">
              {currencies.map((cur) => (
                <div
                  key={cur.name}
                  className="currency-option"
                  onClick={() => handleSelect(cur)}
                >
                  <span>{cur.flag}</span>
                  <p>{cur.name.toUpperCase()}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <button className="signup-btn">
          Sign Up <img src={arrow_icon} alt="arrow" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

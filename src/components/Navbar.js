import "./navbar.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faHouse,
  faShop,
  faCartShopping,
  faArrowUpWideShort,
  faTruckMoving,
  faComments,
  faAddressBook

  
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [button, setButton] = useState(faBars);
  
  const [menu, setMenu] = useState(false);
  

  const toggleClick = () => {
    setButton(button === faBars ? faTimes : faBars);
    // setModeC(button === "dark" ? "light" : "dark");
    setMenu(!menu);
  };

  // const toggleMode = () => {
  //   setMode(mode === faMoon ? faLightbulb : faMoon);
  //   setModeC(modeC === "dark" ? "light" : "dark");
  // };

  // Use useEffect to update the page colors when the mode changes
  // useEffect(() => {
  //   document.body.style.backgroundColor =
  //     modeC === "dark" ? "#000000" : "#ffffff";
  //   document.body.style.color = modeC === "dark" ? "#ffffff" : "#000000";
  // }, [modeC]);


  return (
    <>
      <nav
        className="navbar navbar-lg navbar-light bg-light d-flex "
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            DebayanMart</a>
         
          
          <button
            className="d-flex justify-content-between"
            type="button"
            onClick={toggleClick}
            style={{ border: "none", backgroundColor: "transparent" }}
          >
            <FontAwesomeIcon
              className="hamburger mr-3"
              icon={button}
              beatFade
              size="2x"
              onClick={toggleClick}
              style={{ marginRight: "50px" }}
            />
          </button>

          <div
            className={`collapse navbar-collapse ${menu ? "show" : ""}`}
            id="navbarSupportedContent"
          ></div>
        </div>
      </nav>

      {menu && (
        <div
          className="d-flex flex-column flex-shrink-0 p-3 bg-light"
          id="menuSection"
          style={{
            position: "fixed",
            right: 0,
            width: "280px",
            height: "100vh",
            zIndex:"1000"
          }}
        >
          <div
            className="d-flex flex-column flex-shrink-0 p-3 bg-light"
            style={{ width: "280px" }}
          >
            <a
              href="/"
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
            >
              <span className="fs-4">Sidebar</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <a href="/" className="nav-link active" aria-current="page">
                <FontAwesomeIcon className="mx-2" icon={faHouse} beat/>
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="nav-link link-dark">
                <FontAwesomeIcon className="mx-2" icon={faShop} beat/>
                  Product
                </a>
              </li>
              <li>
                <a href="/" className="nav-link link-dark">
                <FontAwesomeIcon className="mx-2" icon={faCartShopping} beat/>
                  My-Cart
                </a>
              </li>
              <li>
                <a href="/" className="nav-link link-dark">
                <FontAwesomeIcon className="mx-2" icon={faArrowUpWideShort} beat/>
                  My-Orders
                </a>
              </li>
              <li>
                <a href="/" className="nav-link link-dark">
                <FontAwesomeIcon className="mx-2" icon={faTruckMoving} beat/>
                  Track-Orders
                </a>
              </li>
              <li>
                <a href="/" className="nav-link link-dark">
                <FontAwesomeIcon className="mx-2" icon={faComments} beat />
                  Testimonials
                </a>
              </li>
              <li>
                <a href="/" className="nav-link link-dark">
                <FontAwesomeIcon className="mx-2" icon={faAddressBook} beat />
                  Contact-Us
                </a>
              </li>
            </ul>
            <hr />
            <div className="dropdown">
              <a
                href="/"
                className="d-flex align-items-center link-dark text-decoration-none "
                
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt=""
                  width="32"
                  height="32"
                  className="rounded-circle me-2"
                />
                
                <strong>Debayan</strong>
              </a>
              
            </div>
          </div>
        </div>
      )}
    </>
  );
}

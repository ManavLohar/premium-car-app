import React from "react";
import "./Header.css";

function Header() {
  const navMenu = document.getElementById("nav-menu"),
    navLink = document.querySelectorAll(".nav__link");

  // show menu
  // if (navToggle) {
  //   navToggle.addEventListener("click", () => {
  //     navMenu.classList.add("show-menu");
  //   });
  // }
  const openMenu = () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.add("show-menu");
  };

  // hide menu
  // if (navClose) {
  //   navClose.addEventListener("click", () => {
  //     navMenu.classList.remove("show-menu");
  //   });
  // }
  const closeMenu = () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
  };

  // hide menu for mobile
  // function linkAction() {
  // }
  // navLink.forEach((e) => {
  //   e.addEventListener("click", () => {
  //     const navMenu = document.getElementById("nav-menu");
  //     navMenu.classList.remove("show-menu");
  //   });
  // });

  // change background header on scroll
  function scrollHeader() {
    const header = document.getElementById("header");
    if (this.scrollY >= 50) {
      header.classList.add("scroll-header");
    } else {
      header.classList.remove("scroll-header");
    }
  }
  window.addEventListener("scroll", scrollHeader);

  return (
    <header className='header' id='header'>
      <nav className='nav container'>
        <a href='#' className='nav__logo'>
          <i className='ri-steering-line'></i>
          Elecar
        </a>

        <div className='nav__menu' id='nav-menu'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <a href='#home' className='nav__link' onClick={closeMenu}>
                Home
              </a>
            </li>
            <li className='nav__item'>
              <a href='#about' className='nav__link' onClick={closeMenu}>
                About
              </a>
            </li>
            <li className='nav__item'>
              <a href='#popular' className='nav__link' onClick={closeMenu}>
                Popular
              </a>
            </li>
            <li className='nav__item'>
              <a href='#featured' className='nav__link' onClick={closeMenu}>
                Featured
              </a>
            </li>
          </ul>

          <div className='nav__close' id='nav-close'>
            <i className='ri-close-line' onClick={closeMenu}></i>
          </div>
        </div>

        {/* Toggle button */}
        <div className='nav__toggle' id='nav-toggle'>
          <i className='ri-menu-line' onClick={openMenu}></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;

import React from "react";
import styles from "./navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { logo, BiBoxArrowInRight } from "assets/index";

export function Navbar() {
  const { pathname } = useLocation();
  return (
    <nav className={`navbar flex-row styles ${styles.navbar}`}>
      <Link className='navbar-brand' to='/'>
        <img
          className='responsive-img navbar-logo'
          src={logo}
          alt='site logo'
        />
      </Link>

      <ul className='navbar-menu menu-hamburger list-unstyled flex-row'>
        <li className='list-inline'>
          <span
            className={`flex-column menu-link menu-hamburger ${styles.hamburger}`}
          >
            <GiHamburgerMenu />
          </span>
        </li>
      </ul>
      <ul
        className={`navbar-menu navbar-responsive-menu list-unstyled flex-row  ${styles.flexRowEnd}`}
      >
        <li className='list-inline'>
          <Link
            className='flex-column menu-link'
            to={
              pathname === "/login" || pathname === "/sign-up" ? `/` : `/login`
            }
          >
            <button className={`btn flex-row ${styles.loginBtn}`}>
              {pathname === "/login" || pathname === "/sign-up" ? (
                <>
                  <AiFillHome />
                  <span className='md-ht-1 '>Home</span>
                </>
              ) : (
                <>
                  <BiBoxArrowInRight />
                  <span className='md-ht-1 '>Login</span>
                </>
              )}
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

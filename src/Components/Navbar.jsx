import React from 'react';
import '../assets/styles/Navbar.css';
import { BellIcon, ChevronDown, SearchIcon, UserIcon } from '../Icons/icon';
const Navbar = () => (
  <nav className='navbar-container'>
    <div className='nav-aside'>Nav Aside</div>
    <div className='navbar'>
      <section className='search'>
        <input className='search-bar' type='text' placeholder='Search' />
        <SearchIcon />
      </section>
      <section className='login'>
        <UserIcon />
        <button>Login</button>
      </section>
      <section className='navbar-icons'>
        <ChevronDown />
        <BellIcon />
      </section>
    </div>
  </nav>
);
export default Navbar;

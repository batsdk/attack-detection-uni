import React from 'react';
import '../assets/styles/Navbar.css';
import { BellIcon, ChevronDown, SearchIcon, UserIcon } from '../Icons/icon';
const Navbar = () => {
  return (
    <nav className='navbar-container'>
      <div className='nav-aside'>
        <article>Hello</article>
      </div>
      <div className='navbar'>
        <section className='search'>
          <input type='text' className='search-bar' placeholder='Search' />
          <SearchIcon />
        </section>
        <section className='login'>
          <UserIcon />
          <button>Login</button>
        </section>
        <section className='notifications'>
          <ChevronDown />
          <BellIcon />
        </section>
      </div>
    </nav>
  );
};
export default Navbar;

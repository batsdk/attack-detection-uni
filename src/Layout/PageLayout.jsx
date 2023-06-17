import React from 'react';
import '../assets/styles/PageLayout.css';
import { NavLink } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const NavLinks = [
  {
    title: 'Overview',
    link: '/overview',
  },
  {
    title: 'Logs',
    link: '/logs',
  },
  {
    title: 'Perfomance',
    link: '/perfomance',
  },
  {
    title: 'Diagram',
    link: '/diagram',
  },
];

const PageLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className='layout-container'>
        <aside className='layout-aside'>
          {NavLinks.map(({ title, link }, index) => {
            return (
              <>
                <NavLink
                  key={index}
                  to={link}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? 'pending-link'
                      : isActive
                      ? 'active-link '
                      : 'pending-link'
                  }
                >
                  {title}
                </NavLink>
              </>
            );
          })}
        </aside>

        <main className='layout-child'>{children}</main>
      </div>

      <footer>footer</footer>
    </>
  );
};

export default PageLayout;

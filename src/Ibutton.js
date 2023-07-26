import React, { useState } from 'react';
import './App.css';
import { links } from './data';

function Ibutton({ isOpen, toggleSidebar }) {
  // const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      {/* <button
        className="sidebar-toggle"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        <span class="material-symbols-outlined">
          {isNavOpen ? 'youtube_activity' : 'youtube_activity'}
        </span>
      </button> */}

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <nav className="nav">
          <ui>
            {links.map((link) => (
              <li>
                <div className="links">
                  <img src={link.image} />
                  {link.text}
                </div>
              </li>
            ))}
          </ui>
        </nav>

        <button onClick={toggleSidebar}>i</button>
      </div>
    </>
  );
}

export default Ibutton;

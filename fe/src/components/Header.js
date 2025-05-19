import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <style>{`
        header {
          background-color: #222;
          padding: 1rem;
          color: white;
        }

        nav {
          display: flex;
          justify-content: center;
          gap: 2rem;
        }

        a {
          color: white;
          text-decoration: none;
          font-weight: bold;
        }

        a:hover {
          color: #61dafb;
        }
      `}</style>

      <header>
        <nav>
          <Link to="/">Home 스윗 홈</Link>
          <Link to="/login">Login</Link>
          <Link to="/join">Join</Link>
        </nav>
      </header>
    </>
  );
}

export default Header;

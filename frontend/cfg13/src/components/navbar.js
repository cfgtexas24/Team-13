import * as React from 'react';
import Button from '@mui/material/Button'; 
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
    {/* A "layout route" is a good place to put markup you want to
        share across all the pages on your site, like navigation. */}
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/jobs">Jobs</Link>
        </li>
        <li>
          <Link to="/nothing-here">Nothing Here</Link>
        </li>
      </ul>
    </nav>

    <hr />
  </div>
  );
};

export default Navbar;

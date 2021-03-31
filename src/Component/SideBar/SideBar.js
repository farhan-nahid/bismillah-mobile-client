import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const SideBar = () => {
    return (
              <aside className="bg-success  sidebar">
                    <Link to="/manageMobile"className="sidebar-link">Manage Mobiles</Link><br/><br/>
                    <Link to="/adminAddMobile" className="sidebar-link">Add Mobile</Link><br/><br/>
                    <Link  to="/editMobile" className="sidebar-link">Edit Mobiles</Link>
              </aside>
    );
};

export default SideBar;
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar__container'>
            <div className='sidebar__linkBox'>
                <NavLink to='/users-list' activeClassName='activeLink'>Users List</NavLink>
            </div>
        </div>
    );
}

export default Sidebar;
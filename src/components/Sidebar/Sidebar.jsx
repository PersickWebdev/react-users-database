import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar__container'>
            <div className='sidebar__linkBox'>
                <NavLink to='/users-list' activeClassName='activeLink'>Users List</NavLink>
            </div>
            <div className='sidebar__linkBox'>
                <NavLink to='/users-editor' activeClassName='activeLink'>Users Editor</NavLink>
            </div>
            <div className='sidebar__linkBox'>
                <NavLink to='/users-add-form' activeClassName='activeLink'>Users Add Form</NavLink>
            </div>
        </div>
    );
}

export default Sidebar;
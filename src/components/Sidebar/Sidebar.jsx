import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar__container'>
            <div>
                <NavLink to='/users-list'>Users List</NavLink>
            </div>
            <div>
                <NavLink to='/users-editor'>Users Editor</NavLink>
            </div>
            <div>
                <NavLink to='/users-add-form'>Users Add Form</NavLink>
            </div>
        </div>
    );
}

export default Sidebar;
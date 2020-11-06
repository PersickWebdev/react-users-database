import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";

const Sidebar = () => {
    const theme = useSelector((state) => state.users.theme);

    return (
        <div className='sidebar'>
            <div className='linkBox'>
                <NavLink className={theme === 'Light Theme' ? 'link theme--light--link' : 'link theme--dark--link'}
                         to='/users-list'
                         activeClassName={theme === 'Light Theme' ? 'theme--light--active' : 'theme--dark--active'}>
                    Users List
                </NavLink>
            </div>
            <div className='linkBox'>
                <NavLink className={theme === 'Light Theme' ? 'link theme--light--link' : 'link theme--dark--link'}
                         to='/user-add-form'
                         activeClassName={theme === 'Light Theme' ? 'theme--light--active' : 'theme--dark--active'}>
                    Add New User
                </NavLink>
            </div>
            <div className='linkBox'>
                <NavLink className={theme === 'Light Theme' ? 'link theme--light--link' : 'link theme--dark--link'}
                         to='/favourites'
                         activeClassName={theme === 'Light Theme' ? 'theme--light--active' : 'theme--dark--active'}>
                    Favourites
                </NavLink>
            </div>
        </div>
    );
}

export default Sidebar;
import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";

const Sidebar = () => {
    const theme = useSelector((state) => state.users.theme);

    return (
        <div className='sidebar'>
            <div className='linkBox'>
                {/*<NavLink className={theme === 'Light Theme' ? 'link theme--light--link' : 'link theme--dark--link'}*/}
                <NavLink className={classNames('link', {
                    'theme--dark--link': theme === 'Dark Theme',
                    'theme--light--link': theme === 'Light Theme'
                })}
                         to='/users-list'
                         // activeClassName={theme === 'Light Theme' ? 'theme--light--active' : 'theme--dark--active'}>
                         activeClassName={classNames('', {
                             'theme--dark--active': theme === 'Dark Theme',
                             'theme--light--active': theme === 'Light Theme'
                         })}>
                    Users List
                </NavLink>
            </div>
            <div className='linkBox'>
                <NavLink className={classNames('link', {
                    'theme--dark--link': theme === 'Dark Theme',
                    'theme--light--link': theme === 'Light Theme'
                })}
                         to='/user-add-form'
                         activeClassName={classNames('', {
                             'theme--dark--active': theme === 'Dark Theme',
                             'theme--light--active': theme === 'Light Theme'
                         })}>
                    Add New User
                </NavLink>
            </div>
            <div className='linkBox'>
                <NavLink className={classNames('link', {
                    'theme--dark--link': theme === 'Dark Theme',
                    'theme--light--link': theme === 'Light Theme'
                })}
                         to='/favourites'
                         activeClassName={classNames('', {
                             'theme--dark--active': theme === 'Dark Theme',
                             'theme--light--active': theme === 'Light Theme'
                         })}>
                    Favourites
                </NavLink>
            </div>
        </div>
    );
}

export default Sidebar;
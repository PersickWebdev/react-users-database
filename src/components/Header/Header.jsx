import React from 'react';
import { withRouter } from 'react-router-dom';

const WithRouterHeader = (props) => {
    let path = props.location.pathname
        .slice(1)
        .split('-')
        .map(word => word[0].toUpperCase() + word.split('').slice(1).join(''))
        .join(' ');

    return (
        <header className='header__container'>
            <h1>{path}</h1>
        </header>
    );
}

const Header = withRouter(WithRouterHeader);

export default Header;
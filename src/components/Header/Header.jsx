import React from 'react';
import { withRouter } from 'react-router-dom';

const WithRouterHeader = (props) => {
    const path = props.location.pathname
        .slice(1)
        .split('-')
        .map(word => word[0].toUpperCase() + word.split('').slice(1).join(''))
        .join(' ');

    return (
        <div className='header__container'>
            {path}
        </div>
    );
}

const Header = withRouter(WithRouterHeader);

export default Header;
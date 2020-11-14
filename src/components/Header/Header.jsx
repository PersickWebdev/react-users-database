import React from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import { useDispatch, useSelector} from 'react-redux';
import { changeTheme } from "../../redux/actionCreators";

const WithRouterHeader = (props) => {
    const theme = useSelector((state) => state.users.theme);
    const dispatch = useDispatch();

    let path;
    if (props.location.pathname === '/') {
        path = 'Users Database'
    } else {
        path = props.location.pathname
            .slice(1)
            .split('-')
            .map(word => word[0].toUpperCase() + word.split('').slice(1).join(''))
            .join(' ');
    }

    const toggleTheme = (theme) => {
        let value;
        value = theme === 'Light Theme' ? 'Dark Theme' : 'Light Theme';
        dispatch(changeTheme(value));
    }

    return (
        <header className='header'>
            {/*<h1 className={theme === 'Light Theme' ? 'pathName theme--light--text' : 'pathName theme--dark--text'}>{path}</h1>*/}
            <h1 className={classNames('pathName', {
                'theme--dark--text': theme === 'Dark Theme',
                'theme--light--text': theme === 'Light Theme',
            })}>{path}</h1>
            <div className='themeBox'>
                <button className='button--theme' onClick={() => toggleTheme(theme)}>{theme}</button>
            </div>
        </header>
    );
}

const Header = withRouter(WithRouterHeader);

export default Header;
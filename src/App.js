import React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Header} from './components';
import { Sidebar } from './components';
import { UsersList } from "./components";
import { UserAddFormHook } from "./components";
import { Favourites } from './components';

const App = () => {
    const theme = useSelector((state) => state.users.theme);

    return (
        <div className={theme === 'Light Theme' ? 'app__container theme--light--background' : 'app__container theme--dark--background'}>
            <Header/>
            <Sidebar/>
            <div className='app__content'>
                <Route path='/users-list' component={ UsersList } />
                <Route path='/user-add-form' component={ UserAddFormHook } />
                <Route path='/favourites' component={ Favourites } />
            </div>
        </div>
    );
}

export default App;

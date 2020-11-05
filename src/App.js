import React from 'react';
import { Route } from 'react-router-dom';

import { Header} from './components';
import { Sidebar } from './components';
import { UsersList } from "./components";
import { UserAddFormHook } from "./components";
import { Favourites } from './components';

const App = () => {
    console.log('Hello')
    return (
        <div className='app__container'>
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

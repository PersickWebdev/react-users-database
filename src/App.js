import React from 'react';
import { Route } from 'react-router-dom';

import { Header } from './components';
import { Sidebar } from './components';
import { UsersList } from "./components";
import { UserAddForm } from './components'

const App = () => {
    return (
        <div className='app__container'>
            <Header/>
            <Sidebar/>
            <div className='app__content'>
                <Route path='/users-list' component={ UsersList } />
                <Route path='/user-add-form' component={ UserAddForm } />
            </div>
        </div>
    );
}

export default App;

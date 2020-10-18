import React from 'react';
import { Route } from 'react-router-dom';

import { Header } from './components';
import { Sidebar } from './components';
import { UsersList } from "./components";

const App = () => {
    return (
        <div className='app__container'>
            <Header/>
            <Sidebar/>
            <div className='app__content'>
                <Route path='/users-list' component={ UsersList } />
            </div>
        </div>
    );
}

export default App;

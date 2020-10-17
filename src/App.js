import React from 'react';
import { Route } from 'react-router-dom';

import { Header } from './components';
import { Sidebar } from './components';
import { UsersList } from "./components";
import { UsersEditor } from "./components";
import { UsersAddForm } from "./components";
import { Footer } from './components';

const App = () => {
    return (
        <div className='app__container'>
            <Header/>
            <Sidebar/>
            <div className='app__content'>
                <Route path='/users-list'     component={ UsersList } exact/>
                <Route path='/users-editor'   component={ UsersEditor } exact/>
                <Route path='/users-add-form' component={ UsersAddForm } exact/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;

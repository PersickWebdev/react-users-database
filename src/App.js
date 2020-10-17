import React from 'react';

import { Header } from './components';
import { Sidebar } from './components';
import { Footer } from './components';

const App = () => {
    return (
        <div className='app__container'>
            <Header/>
            <Sidebar/>
            <div className='app__content'>
                <div>Content</div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;

import React from 'react';
import UserInfo from '../UserInfo/UserInfo';
import News from '../News/News';
import './Main.css';
const Main = () => {
    return (
        <main className='Main'>
            <UserInfo/>
            <News/>
        </main>
    );
};

export default Main;
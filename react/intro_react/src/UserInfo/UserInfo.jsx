import React from 'react';
import Gallery from '../Gallery/Gallery';
import './UserInfo.css';

const UserInfo = () => {
    return (
        <div className='info'>
            <img src="http://www.spletnik.ru/img/2017/11/polly/20170111-image-2.JPG" alt="Leav Taylor" className="photo"/>
            <h2 className="name">tyler mcGinis</h2>
            <h3 className="nickname">@tyler</h3>
            <Gallery/>
        </div>
    );
};

export default UserInfo;
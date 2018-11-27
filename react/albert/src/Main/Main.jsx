import React from 'react';
import Description from '../Description/Description';
import Qoute from '../Qoute/Qoute';
import Timeline from '../Timeline/Timeline';
import './Main.css';

const Main = () => {
    return (
        <main>
            <Description/>
            <Qoute/>
            <Timeline/>
            <div id="link">
                <a id="tribute-link" href="http://www.shmoop.com/albert-einstein/timeline.html" target="_blank" rel="noopener noreferrer">Full timeline at Shmoop!</a>
            </div>
        </main>
    );
};

export default Main;
// import React from 'react';

// <h1>Title</h1> // так пишем мы
// React.createElement('h1',null,'Title'); // так нашу запись понимает реакт и так обрабатывает

// rcc - создать умный компонент. class component skeleton

// rsc - создать тупой компонент. stateless component skeleton, СОЗДАЛИ ЕГО:

// import React from 'react';
// import './App.css';

// const App = () => {
//     return (
//         <div>
//             <h1 className='title'>Hello React</h1>
//             <p className='title'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//         </div>
//     );
// };

// export default App;

// ====================================================================================================

import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import './App.css';

const App = () => {
    return (
        <div>
            <Header/>
            <Main/>
        </div>
    );
};

export default App;
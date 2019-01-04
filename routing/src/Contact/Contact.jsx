import React from 'react';
import { NavLink } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Addres from '../Addres/Addres';
import Phone from '../Phone/Phone';
import Email from '../Email/Email';

const Contact = (props) => {
    console.log(props);
    return (
        <div>
            <h2>Tesla Semi</h2>
            <p>{props.text}</p>
            <ul>
                <li>
                    <NavLink to={`${props.match.path}/addres`}>Addres</NavLink>
                        {/* <Switch>
                            <Route path={`${props.match.path}/addres`} component={Addres}/>
                        </Switch> */}
                </li>
                <li>
                    <NavLink to={`${props.match.path}/phone_number`}>Phone number</NavLink>
                        {/* <Switch>
                            <Route path={`${props.match.path}/phone_number`} component={Phone}/>
                        </Switch> */}
                </li>
                <li>
                    <NavLink to='/contact/email'>Email</NavLink>
                        {/* <Switch>
                            <Route path={`${props.match.path}/email`} component={Email}/>
                        </Switch> */}
                </li>
            </ul>
            <Switch>
                <Route path={`${props.match.path}/addres`} component={Addres}/>
                <Route path={`${props.match.path}/phone_number`} component={Phone}/>
                <Route path={`${props.match.path}/email`} component={Email}/>
            </Switch>
        </div>
    );
};

export default Contact;
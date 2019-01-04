import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Menu.css';

const Menu = () => {
    return (
        // <div >
        //     <button className={styles.menu_btn}>Один день</button>
        //     <button className={styles.menu_btn}>Пять дней</button>
        // </div>

        <ul className={styles.menu}>
            <li>
                <NavLink className={styles.menu_btn} to='/'>Weather today</NavLink>
            </li>
            <li>
                <NavLink className={styles.menu_btn} to='/five_day'>Weather for five days</NavLink>
            </li>
        </ul>
    );
};

export default Menu;
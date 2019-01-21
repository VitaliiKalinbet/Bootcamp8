import React from 'react';
import Delete from './delete.png';
import styles from './ItemFavoriteList.css';
import PropTypes from 'prop-types';

const ItemFavoriteList = ({openCityFromFavoriteList, deleteCityFromFavoriteList, el}) => {
    return (
        <li className={styles.list_item} onClick={openCityFromFavoriteList} id={el} key={el}>
            {el}
            <img id={el} onClick={deleteCityFromFavoriteList} className={styles.delete_icon} src={Delete} alt="delete"/>
        </li>
    );
};

ItemFavoriteList.propTypes = {
    deleteCityFromFavoriteList: PropTypes.func.isRequired,
    openCityFromFavoriteList: PropTypes.func.isRequired,
}

export default ItemFavoriteList;
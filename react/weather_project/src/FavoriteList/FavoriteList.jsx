import React from 'react';
import ItemFavoriteList from '../ItemFavoriteList/ItemFavoriteList';
import styles from './FavoriteList.css';
import PropTypes from 'prop-types';

const FavoriteList = ({ showFavorList, favorList, openCityFromFavoriteList, deleteCityFromFavoriteList }) => {
    return (
        <ul className={styles.list_favor_city}>
            {showFavorList ? favorList.map(el => 
            <ItemFavoriteList key={el} openCityFromFavoriteList={openCityFromFavoriteList} deleteCityFromFavoriteList={deleteCityFromFavoriteList} el={el}/>) : null}
        </ul>
    );
};

FavoriteList.propTypes = {
    showFavorList:  PropTypes.bool.isRequired,
    favorList: PropTypes.array.isRequired,
    deleteCityFromFavoriteList: PropTypes.func.isRequired,
    openCityFromFavoriteList: PropTypes.func.isRequired,   
}

export default FavoriteList;
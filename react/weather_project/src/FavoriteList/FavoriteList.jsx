import React from 'react';
import ItemFavoriteList from '../ItemFavoriteList/ItemFavoriteList';
import styles from './FavoriteList.css';
import PropTypes from "prop-types";

const FavoriteList = ({ showFavorList, favorList, openCityFromFavoriteList, deleteCityFromFavoriteList }) => {
    return (
        <ul className={styles.list_favor_city}>
            {showFavorList ? favorList.map(el => 
            <ItemFavoriteList key={el} openCityFromFavoriteList={openCityFromFavoriteList} deleteCityFromFavoriteList={deleteCityFromFavoriteList} el={el}/>) : null}
        </ul>
    );
};

export default FavoriteList;
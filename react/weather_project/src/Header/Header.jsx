import React from 'react';
import location from './location-on-map.png';
import PropTypes from "prop-types";
import styles from './Header.css';
import FavoriteList from '../FavoriteList/FavoriteList';
// import { link } from 'fs';
import Star from './star.png';
import StarYellow from './stayellow.png';

const Header = ({data, time, handlerInputChange, city, onSubmitInputFunc, stateShape, clickOnShape, toggleFavorList, showFavorList, favorList, deleteCityFromFavoriteList, openCityFromFavoriteList}) => {
    return (
        <div className={styles.header}>
                <div className={styles.divInput}>
                    <form className={styles.form} onSubmit={onSubmitInputFunc}>
                        <input value={city} onChange={handlerInputChange} placeholder="Enter city" className={styles.input} type="text"/>
                    </form>
                    {/* <div className={favorList.includes(city) ? styles.shapeglass : styles.shape} title="Add city to favorites" onClick={clickOnShape}>
                    </div> */}
                    <img title="Add city to favorites" onClick={clickOnShape} className={styles.star} src={favorList.includes(city) ? StarYellow : Star} alt=""/>
                <div className={styles.div_btnFavor_plus_favorList}>
                    <button onClick={toggleFavorList} className={styles.btn_fvr_city}>Favorite cities list</button>
                    <FavoriteList showFavorList={showFavorList} favorList={favorList} openCityFromFavoriteList={openCityFromFavoriteList} deleteCityFromFavoriteList={deleteCityFromFavoriteList}/>
                </div>
            </div>
            <div className={styles.geolocation}>
                <img className={styles.location_img} src={location} alt="icon-location"/>
                <p className={styles.city_name}>{data.name}, {data.sys.country}</p>
            </div>
        </div>
    );
};

Header.protoTypes = {
    data: PropTypes.object.isRequired,
    time: PropTypes.string.isRequired,
    handlerInputChange: PropTypes.func.isRequired,
    onSubmitInputFunc: PropTypes.func.isRequired,
    city: PropTypes.string.isRequired,
    stateShape: PropTypes.bool.isRequired,
    clickOnShape:  PropTypes.func.isRequired,
};

export default Header;
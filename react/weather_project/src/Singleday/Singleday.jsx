import React from 'react';
import moment from 'moment';
import styles from './Singleday.css';

const Singleday = ({onClickDiv, minTemp, maxTemp, icon, data, date}) => {
    // const icon = arrOfFiveDayWeatherObject[0].['0'].weather.weather[0].icon;
    let iconImg = icon.find( (el, index, arr) => {
            if (parseInt(el) !== parseInt(arr[index + 1])) {
                let quantity = icon.filter(item => el === item);
                let large = 0;
                if (quantity.length > large ) {
                    large = quantity.length;
                    return parseInt(el);
                }
            }
        });
    return (
        <div className={styles.single_day_card}>
            {/* <p className={styles.p_date}> {moment.unix(date).format('DD MMM')}</p>
            <img className={styles.img} src={`http://openweathermap.org/img/w/${iconImg}.png`} alt="weather"/>
            <p className={styles.p_temp}>{averageTemp}&#176;</p>
            <button id={date} onClick={onClickDiv}>more info</button> */}
    
                        <p className={styles.p_date}>{moment.unix(date).format('dddd')}</p>
                        <p className={styles.p_day_now}>{moment.unix(date).format('DD')}</p>
                        <p className={styles.p_date}>{moment.unix(date).format('MMMM')}</p>
                        <img className={styles.img} src={`http://openweathermap.org/img/w/${iconImg}.png`} alt="weather"/>
                        {/* <p className={styles.p_temp_now}>{Math.round(data.main.temp)}&#176;</p> */}
                        <div className={styles.div_min_max}>
                            <div className="min">
                                <p className={styles.sign}>min.</p>
                                <p className={styles.small_temp}>{minTemp}&#176;</p>
                            </div>
                            <div className="max">
                                <p className={styles.sign}>max.</p>
                                <p className={styles.small_temp}>{maxTemp}&#176;</p>
                            </div>
                        </div>
                        <button className={styles.btn_more_info} id={date} onClick={onClickDiv}>more info</button>

        </div>
    );
};

export default Singleday;
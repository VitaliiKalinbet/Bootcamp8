import React from 'react';
import styles from './InfoForDay.css';
import pressureImg from './pressure.png';
import humidityImg from './humidity.png';
import windImg from './wind.png';
import PropTypes from 'prop-types';

const InfoForDay = ({ arrOfChoiceDay }) => {
    // console.log(arrOfChoiceDay);
    return (
        <div className={styles.moreinfo}>
            {arrOfChoiceDay.map(el => <div key={el.dt} className={styles.day}>
                <p className={styles.time_info}>{`${el.dt_txt.split(' ')[1].split(':')[0]} :00`}</p>
                <img className={styles.img} src={`https://openweathermap.org/img/w/${el.weather[0].icon}.png`} alt="weather"/>
                <p className={styles.temp_info}>{Math.round(el.main.temp)}&#176;</p>
                <p><img className={styles.icon_img} src={pressureImg} alt="pressure"/>{Math.round(el.main.pressure/1.3)} mm</p>
                <p><img className={styles.icon_img} src={humidityImg} alt="humidity"/>{el.main.humidity} %</p>
                <p><img className={styles.icon_img} src={windImg} alt="wind"/>{el.wind.speed} m/s</p>
            </div>)}     
        </div>
    );
};

InfoForDay.propTypes = {
    arrOfChoiceDay: PropTypes.array.isRequired,
}

export default InfoForDay;
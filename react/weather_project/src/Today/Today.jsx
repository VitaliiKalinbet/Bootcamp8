import React from 'react';
import PropTypes from "prop-types";
import moment from 'moment';
import imgObj from '../weather-img.jsx';
import styles from './Today.css';
import thermometer from './thermometer.png';
import calendar from './calendar.png';
import sunrise from './sunrise.png';
import sunset from './sunset.png';

const Today = ({data, quote, time}) => {
    // const icon = data.weather[0].icon;
    // console.log(data);
    return (
        <div className={styles.divtoday}>

            <div className={styles.div_date_and_temp}>

                <div className={styles.date_in_calendar}>
                    <img className={styles.calendar} src={calendar} alt="calendar"/>
                    <div className={styles.div_temp_plus_date}>        
                        <p className={styles.p_date}>{moment().format('dddd')}</p>
                        <p className={styles.p_day_now}>{moment().format('DD')}</p>
                        <p className={styles.p_date}>{moment().format('MMMM')}</p>
                        <p className={styles.time}>{time}</p>
                        {/* <p className={styles.p_date_plus_time}>{datePlusTime}</p> */}
                    </div>
                </div>

                <div className={styles.div_weather_number_info}>
                    <div className={styles.weather_plus_temp_icon}>
                        <img className={styles.thermometer_icon} src={thermometer} alt="thermometer"/>
                        <div className={styles.div_weather}>
                            <p className={styles.p_temp_now}>{Math.round(data.main.temp)}&#176;</p>

                            <div className={styles.div_min_max}>

                                <div className="min">
                                    <p className={styles.sign}>min.</p>
                                    <p className={styles.small_temp}>{Math.round(data.main.temp_min)}&#176;</p>
                                </div>
                                <div className="max">
                                    <p className={styles.sign}>max.</p>
                                    <p className={styles.small_temp}>{Math.round(data.main.temp_max)}&#176;</p>
                                </div>
                                
                            </div>

                        </div>
                        
                    </div>

                    <div className={styles.div_sun_info}>
                        <img className={styles.img_sun} src={sunrise} alt=""/><p>{moment.unix(data.sys.sunrise).format('HH:mm')}</p>
                        <img className={styles.img_sun} src={sunset} alt=""/><p>{moment.unix(data.sys.sunset).format('HH:mm')}</p>
                    </div>

                </div>

            <div>
                    <p className={styles.p_humidity}>{data.weather.reduce( (acc,el ) => acc + el.description + ' ', '')}</p>
                    {/* <img className={styles.icon_weather} src={`http://openweathermap.org/img/w/${icon}.png`} alt="weather"/> */}
                     <img className={styles.weather_img} src={imgObj[data.weather[0].icon]} alt="weather"/>
                </div>

            </div>

            <div className={styles.div_icon_plus_humidity}>
                <p className={styles.quote_text}>{quote.text}</p>
                <h2 className={styles.quote_author}>{quote.author}</h2>
            </div>
        </div>
    );
};

Today.protoTypes = {
    data: PropTypes.object.isRequired,
}

export default Today;
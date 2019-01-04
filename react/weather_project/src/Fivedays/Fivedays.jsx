import React, { Component } from 'react';
import axios from 'axios';
// import Loader from 'react-loader-spinner';
import moment from 'moment';
import Singleday from '../Singleday/Singleday';
import Chart from '../Chart/Chart';
import InfoForDay from '../InfoForDay/InfoForDay';
import uuidv4 from 'uuid/v4';
import Loader from 'react-loader-spinner'
import styles from './Fivedays.css';

class Fivedays extends Component {

    state = {
        dataFiveDay: {},
        cityForFiveDay: this.props.cityForFiveDay,
        arrOfFiveDayWeatherObject: [],
        arrOfAverageTemp: [],
        arrOfAverageHumidity: [],
        arrOfPressure: [],
        arrOfWindSpeed: [],
        isLoading: true,
        showChart: false,
        arrOfChoiceDay: [],
    };

componentDidMount () {
    this.getWeatherForFiveDays(this.state.cityForFiveDay);
    }

componentDidUpdate (prevProps) {
    if( prevProps.cityForFiveDay !== this.props.cityForFiveDay) {
        this.getWeatherForFiveDays(this.props.cityForFiveDay)
    }
}

getWeatherForFiveDays = (nameOfCity) => {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?APPID=8defc985a5e2c764076c53bf90c6c44e&units=metric&lang=en&q=${nameOfCity || 'Kiev'}`)
    .then( res => {
        this.setState({
        dataFiveDay: res.data,
        // isLoading: false,
        })
    })
    .then(() => this.searchAverageTempFromFiveDay(this.state.dataFiveDay))
    .catch(err => {
        console.log('five days weather error', err);
    })
    }

    searchAverageTempFromFiveDay = (data) => {
    let arrOfFiveDayWeatherObject = [];
    let arrOfAverageTemp = [];
    let arrOfAverageHumidity = [];
    let arrOfPressure = [];
    let arrOfWindSpeed = [];
    for (let i = 0; i<5; i++) { 
        let startDay = moment().add(i, 'days').startOf('day').format('X');
        let endDay = moment().add(i, 'days').endOf('day').format('X');
        let dayArr = data.list.filter( el => el.dt < endDay && el.dt > startDay );
        arrOfFiveDayWeatherObject.push(dayArr);
        let averageTemp = Math.floor(dayArr.reduce((acc, el) => acc + el.main.temp, 0) / dayArr.length);
        arrOfAverageTemp.push(averageTemp);
        let averageHumidity = Math.floor(dayArr.reduce((acc, el) => acc + el.main.humidity, 0) / dayArr.length);
        arrOfAverageHumidity.push(averageHumidity);
        let averagePressure = Math.floor(dayArr.reduce((acc, el) => acc + el.main.pressure, 0) / dayArr.length / 1.33);
        arrOfPressure.push(averagePressure);
        let averageWind = Math.floor(dayArr.reduce((acc, el) => acc + el.wind.speed, 0) / dayArr.length);
        arrOfWindSpeed.push(averageWind);
        }
        this.setState({
        arrOfFiveDayWeatherObject: arrOfFiveDayWeatherObject,
        arrOfAverageTemp: arrOfAverageTemp,
        arrOfAverageHumidity: arrOfAverageHumidity,
        arrOfPressure: arrOfPressure,
        arrOfWindSpeed: arrOfWindSpeed,
        isLoading: false,
        })
}

onClickDiv = async (evt) => {
    let id = evt.target.id;
    let startDay = moment.unix(id).startOf('day').format('X');
    let endDay = moment.unix(id).endOf('day').format('X');
    let arrOfChoiceDay = this.state.arrOfFiveDayWeatherObject.map(el => el.filter(item => item.dt < endDay && item.dt > startDay )).reduce((acc,el) => acc.concat(el), []);
    await this.setState({
        arrOfChoiceDay: arrOfChoiceDay,
    })
}

toggleShowChart = () => {
    this.setState(prevState => ({
        showChart: !prevState.showChart,
    }))
}

    // {arrOfFiveDayWeatherObject ,arrOfAverageTemp,arrOfAverageHumidity, arrOfWindSpeed, arrOfPressure
    
    render() {
        const { isLoading } = this.state;
        return (
        <div className={styles.wrapper}>
            {isLoading 
                ? 
                <div className={styles.loading_in_five_days}>
                    <Loader 
                    type="Oval"
                    color="gray"
                    height="50"	
                    width="100" />
                </div>
                : 
            <div className={styles.wrapper}>
                <div className={styles.div_five_days}>
                    {this.state.arrOfFiveDayWeatherObject.map(el => 
                    <Singleday data={this.props.data} onClickDiv={this.onClickDiv} key={uuidv4()} minTemp = {Math.round(Math.min(...el.map( el => el.main.temp_min)))} maxTemp = {Math.round(Math.max(...el.map( el => el.main.temp_max)))} icon = {el.map(item => item.weather[0].icon)} date = {el[0].dt}/>)}
                </div>
                
                {/* averageTemp = {Math.floor(el.reduce((acc, el) => acc + el.main.temp, 0) / el.length)} */}
                
                <div className={styles.info}>
                    <InfoForDay arrOfChoiceDay={this.state.arrOfChoiceDay}/> 
                </div>
                <button className={styles.btn_show_chart} onClick={this.toggleShowChart}>Show/hide chart</button>
                {this.state.showChart ? <Chart arrOfWindSpeed={this.state.arrOfWindSpeed} arrOfPressure={this.state.arrOfPressure} arrOfAverageHumidity={this.state.arrOfAverageHumidity} arrOfAverageTemp={this.state.arrOfAverageTemp}/>
                : null}                
            </div>}
        </div>
        );
    }
}

export default Fivedays;
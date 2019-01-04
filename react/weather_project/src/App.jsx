import React, { Component } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner'
import Header from './Header/Header';
import moment from 'moment';
import defaultImg from './canyon.jpg';
import styles from './App.css';
import Info from './Info/Info';
import Quotes from './Quotes';

class App extends Component {

  state = {
    city: '',
    cityForFiveDay: '',
    stateShape: false,
    background: '',
    geo: {},
    favorList: JSON.parse(localStorage.getItem('Favorite-city')) || [],
    data: {},
    isLoading: true,
    validateInput: false,
    fetchError: false,
    backGroundUrl: '',
    time: moment().format('kk:mm:ss'),
    datePlusTime: moment().format('LLLL'),
    quote: {},
  }

  componentDidMount () {
    this.getAxiosDataWeatherAndPhoto(this.state.city);
    // this.timeNow();
  }

getAxiosDataWeatherAndPhoto = (nameOfCity) => {
  Promise.all([axios.get(`https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&q=${`${nameOfCity}` || 'Kiev city'}`), axios.get(`http://api.openweathermap.org/data/2.5/weather?APPID=8defc985a5e2c764076c53bf90c6c44e&units=metric&lang=en&q=${nameOfCity || 'Kiev'}`)])
  .then( res => {
    // console.log(res);
    this.setState({
      background: res[0].data.hits[0].largeImageURL,
      data: res[1].data,
      showFavorList: false,
      isLoading: false,
      cityForFiveDay: nameOfCity,
      quote: Quotes[Math.ceil(Math.random()*9)],
    })
  })
  .catch(err => {
    if (err) {
      axios.get(`http://api.openweathermap.org/data/2.5/weather?APPID=8defc985a5e2c764076c53bf90c6c44e&units=metric&lang=en&q=${nameOfCity || 'Kiev'}`)
    .then( res => {
      this.setState({
        background: defaultImg,
        data: res.data,
        isLoading: false,
        showFavorList: false,
        cityForFiveDay: nameOfCity,
        quote: Quotes[Math.ceil(Math.random()*9)],
      })
      })
      .catch(err => alert('Enter city correctly!'))
    }
  })
}

timeNow = () => {
  setInterval(()=> {
    this.setState({
      time: moment().format('kk:mm:ss'),
      datePlusTime: moment().format('LLLL'),
    })
  },1000)
}

handlerInputChange = (evt) => {
  let value = evt.target.value;
  this.setState({
    city: value,
  }) 
}

onSubmitInputFunc = (evt) => {
  const reg = /[a-zA-z]/; 
  if (reg.test(this.state.city)) {
    evt.preventDefault();
    this.getAxiosDataWeatherAndPhoto(this.state.city);
  } else {
    alert('Enter city on English, please')
  }
}

clickOnShape = async () => {
  if (this.state.city === '') {
    return
  }
  if (!this.state.favorList.includes(this.state.city)) {
    await this.setState(prev => ({
      favorList: [...prev.favorList, prev.city],
    }))
  }
  localStorage.setItem('Favorite-city', JSON.stringify(this.state.favorList));
}

toggleFavorList = () => {
  this.setState(prev => ({
    showFavorList: !prev.showFavorList,
  }))
}

// getPhotosFromPexels () {
//   fetch(`https://api.pexels.com/v1/search?query=Kharkiv+city`, {
//     headers: {
//       'Authorization': '563492ad6f91700001000001b4b0aa25d77d41b7b35937d557cbdf4e',
//     }
//   })
//   .then( res => res.json())
//   .then(data => console.log(data))
//   .catch(error => console.log('pexels fetch', error))
// }

deleteCityFromFavoriteList = async (e) => {
  let name = e.target.id;
  await this.setState({
    favorList: this.state.favorList.filter(el => el !== name),
  });
  localStorage.setItem('Favorite-city', JSON.stringify(this.state.favorList));
}

openCityFromFavoriteList = async (e) => {
  if (e.target.tagName === "LI") {
    let cityName = e.target.id;
    this.getAxiosDataWeatherAndPhoto(cityName);
  }
  await this.setState({
    city: '',
  }) 
}

  render() {
    const backGroundUrl = this.state.background;
    return (
      <div className={styles.App} style={ { backgroundImage: `linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)), url(${backGroundUrl})` } } >
          {this.state.isLoading ? 
            <div className={styles.loading}>
              <Loader 
              type="Oval"
              color="gray"
              height="50"	
              width="100" />
            </div>  
          :
          <div className={styles.doubleApp}>
            <Header openCityFromFavoriteList={this.openCityFromFavoriteList} deleteCityFromFavoriteList={this.deleteCityFromFavoriteList} favorList={this.state.favorList} showFavorList={this.state.showFavorList} toggleFavorList={this.toggleFavorList} data={this.state.data} clickOnShape={this.clickOnShape} stateShape={this.state.stateShape} onSubmitInputFunc={this.onSubmitInputFunc} city={this.state.city} handlerInputChange={this.handlerInputChange} time={this.state.time}/>
            <Info time={this.state.time} cityForFiveDay={this.state.cityForFiveDay} isLoading={this.state.isLoading} quote={this.state.quote} arrOfWindSpeed={this.state.arrOfWindSpeed} arrOfPressure={this.state.arrOfPressure} arrOfAverageHumidity={this.state.arrOfAverageHumidity} arrOfAverageTemp={this.state.arrOfAverageTemp} arrOfFiveDayWeatherObject={this.state.arrOfFiveDayWeatherObject} data={this.state.data} datePlusTime={this.state.datePlusTime} city={this.state.city}/>
          </div>
          }
      </div>
    );
  }
}
// скобка всего класса

export default App;
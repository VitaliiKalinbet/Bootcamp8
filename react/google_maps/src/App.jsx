import React, { Component } from 'react';
// import Maps from './Maps/Maps';
import MyMapComponent from './MyMapComponent/MyMapComponent';
import './App.css';

class App extends Component {

  state = {
    isMarkerShown: false,
    labelVisible: false,
    markerCoordArr: [],
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  togglelabelVisible = () => {
    this.setState(prev => ({
      labelVisible: !prev.labelVisible,
    }))
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  showCoordFunc = (evt) => {
    let markerObj = {
      lat: evt.latLng.lat(), 
      lng: evt.latLng.lng(),
    }
    this.setState(prev => ({
      markerCoordArr: [...prev.markerCoordArr, markerObj],
    }))
    console.log(evt.latLng.lat());
    console.log(evt.latLng.lng());
    console.log(evt);
  }

  render() {
    return (
      <div className="App">
          <MyMapComponent markerCoordArr={this.state.markerCoordArr} labelVisible={this.state.labelVisible} togglelabelVisible={this.togglelabelVisible} isMarkerShown={this.state.isMarkerShown} showCoordFunc={this.showCoordFunc}/>
      </div>
    );
  }
}

export default App;
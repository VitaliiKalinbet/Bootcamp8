import React, { Component } from 'react';
import Card from './Card/Card';
import styles from './App.css';
import './App.css';

class App extends Component {

state = { 
  templates : [
    {
        "id": 1,
        "template": [
           {	
             "component": "IMAGE",
             "field": "images"
             },
             {
               "component": "ADDRESS",
               "field": "full_address"
             },
             {
                 "component": "PRICE",
               "field": "price"
             },
             {
                 "component": "AREA",
               "field": "area"
             }
        ],
    },
    {
        "id": 2,
        "template": [
           {
               "component": "ADDRESS",
               "field": "full_address"
             },
             {	
             "component": "IMAGE",
             "field": "images"
             },
             {
                 "component": "PRICE",
               "field": "price"
             },
             {
                 "component": "AREA",
               "field": "area"
             }
        ]
    },
    {
        "id": 3,
        "template": [
           {
               "component": "ADDRESS",
               "field": "full_address"
             },
                {	
                 "component": "IMAGE",
                 "field": "images",
                 "children": [
                         {
                             "component": "PRICE",
                           "field": "price"
                         }
                     ]
             },
             {
                 "component": "AREA",
               "field": "area"
             }
 
        ]
    }
  ],
  arrOfProperties: [],
}

  render() {
    const {arrOfProperties} = this.state;
    return (
      <div className={styles.App}>
        {arrOfProperties.map(el => <Card templates={this.state.templates} full_address={el.full_address} image={el.images[0]} area={el.area} price={el.price}/>)}
        
      </div>
    );
  }

  componentDidMount () {
    this.goToTheLink('http://demo4452328.mockable.io/properties');
  };

  goToTheLink = (url) => {
    fetch(url)
    .then(res => res.json())
    .then(data => this.putDataFromServerInState(data))
    .catch(err => console.log(err));
  };

  putDataFromServerInState = (info) => {
    this.setState({
      arrOfProperties: info.data,
    })
  };
}

export default App;

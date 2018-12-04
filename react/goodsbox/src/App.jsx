import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card';

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //       shoes: [{
  //         logo: 'https://s5.postimg.cc/wy79025cz/nike_Logo_White.png',
  //         item: 'https://s5.postimg.cc/j9r8yf9gn/sws1.png',
  //         title: 'Hartbeespoort',
  //         desc: 'Support and Nike Zoom Air come together for a more supportive feel with high-speed responsiveness',
  //         bgt: 'FAS',
  //         productDesc: 'Hartbee',
  //         productDescSecond: 'spoort',
  //         bage: 'New',
  //         caption: 'Basket Ball Collection',
  //         sizes: [7,8,9,10,11],
  //         colors: ['orange', 'green', 'yellow'],
  //         price: '23.453',
  //       },
  //       {
  //         logo: 'https://s5.postimg.cc/wy79025cz/nike_Logo_White.png',
  //         item: 'https://s5.postimg.cc/j9r8yf9gn/sws1.png',
  //         title: 'Nike Air Jordan ',
  //         desc: 'Nike Air Jordan I 1 Retro Mens Shoes Leather Black Blue',
  //         bgt: 'NAJ',
  //         productDesc: 'Nike',
  //         productDescSecond: 'Air Jordan',
  //         bage: 'New',
  //         caption: "Men's Basketball",
  //         sizes: [6,7,8,12],
  //         colors: ['green', 'yellow'],
  //         price: '88.19',
  //       },{
  //         logo: 'https://s5.postimg.cc/wy79025cz/nike_Logo_White.png',
  //         item: 'https://s5.postimg.cc/j9r8yf9gn/sws1.png',
  //         title: 'Nike Air Huarache',
  //         desc: 'Nike Air Huarache Run Ultra BR Running Shoes Sneakers Dark Grey Menta Black',
  //         bgt: 'NAH',
  //         productDesc: 'Nike',
  //         productDescSecond: 'Air Huarache',
  //         bage: 'sale',
  //         caption: 'Unisex Running',
  //         sizes: [10,11,12,13],
  //         colors: ['orange'],
  //         price: '78.21',
  //       }],
  //   };
  // }

  // новый синтаксис в ES7 (выше синтаксис ES6):
  state = {
    shoes: [{
              logo: 'https://s5.postimg.cc/wy79025cz/nike_Logo_White.png',
              item: 'https://s5.postimg.cc/j9r8yf9gn/sws1.png',
              title: 'Hartbeespoort',
              desc: 'Support and Nike Zoom Air come together for a more supportive feel with high-speed responsiveness',
              bgt: 'FAS',
              productDesc: 'Hartbee',
              productDescSecond: 'spoort',
              bage: 'New',
              caption: 'Basket Ball Collection',
              sizes: [7,8,9,10,11],
              colors: ['orange', 'green', 'yellow'],
              price: '23.453',
            },
            {
              logo: 'https://s5.postimg.cc/wy79025cz/nike_Logo_White.png',
              item: 'https://s5.postimg.cc/j9r8yf9gn/sws1.png',
              title: 'Nike Air Jordan ',
              desc: 'Nike Air Jordan I 1 Retro Mens Shoes Leather Black Blue',
              bgt: 'NAJ',
              productDesc: 'Nike',
              productDescSecond: 'Air Jordan',
              bage: 'New',
              caption: "Men's Basketball",
              sizes: [6,7,8,12],
              colors: ['green', 'yellow'],
              price: '88.19',
            },{
              logo: 'https://s5.postimg.cc/wy79025cz/nike_Logo_White.png',
              item: 'https://s5.postimg.cc/j9r8yf9gn/sws1.png',
              title: 'Nike Air Huarache',
              desc: 'Nike Air Huarache Run Ultra BR Running Shoes Sneakers Dark Grey Menta Black',
              bgt: 'NAH',
              productDesc: 'Nike',
              productDescSecond: 'Air Huarache',
              bage: 'sale',
              caption: 'Unisex Running',
              sizes: [10,11,12,13],
              colors: ['orange'],
              price: '78.21',
              retail: {
                buy: 55.12,
                sell: 78.21,
              }
            }],
    cartCounter: 0,
    cart: [],
  }

  increment = (evt) => {
    let title = evt.target.dataset.title;
    let result = this.state.shoes.find(el => el.title === title);
    this.setState(prev =>({
      cartCounter: prev.cartCounter + 1,
      cart: [...prev.cart, result],
    }))
    // this.setState({
    //   cartCounter = 5 // в этом случае просто присваеваем нов занчение , нас не инткрксует предыл значение!!!
    // })
  }

  render() {
    const {shoes, cartCounter, cart} = this.state;
    let sum = cart.reduce((acc, el) => acc + Number(el.price), 0).toFixed(2);
    return (
      <div className="box">
        <div className="info">
          <div className="cart">
            {/* <p className="counter">Account {cartCounter}</p> */}
            
            {cart.map(el => <p className="cartInfo" key={el.title}>{el.title} {el.price}</p> )}
            <p className="counter total">Total Price {sum}</p>
          </div>
      </div>
      {shoes.map( el => <Card  key = {el.title}  title = {el.title} desc={el.desc} bgt={el.bgt} productDesc={el.productDesc} 
       productDescSecond={el.productDescSecond} bage={el.bage} caption={el.caption} sizes={el.sizes} 
       colors={el.colors} price={el.price} retail={el.retail} increment={this.increment}/>)}   
      </div>
    );
  }
}

export default App;
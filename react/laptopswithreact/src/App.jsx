import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card';

class App extends Component {
  state = {
    laptops: [
      {
        size: 13,
        color: 'white',
        price: 28000,
        release_date: 2015,
        name: 'Macbook Air White 13"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
      },
      {
        size: 13,
        color: 'gray',
        price: 32000,
        release_date: 2016,
        name: 'Macbook Air Gray 13"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
      },
      {
        size: 13,
        color: 'black',
        price: 35000,
        release_date: 2017,
        name: 'Macbook Air Black 13"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
      },
      {
        size: 15,
        color: 'white',
        price: 45000,
        release_date: 2015,
        name: 'Macbook Air White 15"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
      },
      {
        size: 15,
        color: 'gray',
        price: 55000,
        release_date: 2016,
        name: 'Macbook Pro Gray 15"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
      },
      {
        size: 15,
        color: 'black',
        price: 45000,
        release_date: 2017,
        name: 'Macbook Pro Black 15"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
      },
      {
        size: 17,
        color: 'white',
        price: 65000,
        release_date: 2015,
        name: 'Macbook Air White 17"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
      },
      {
        size: 17,
        color: 'gray',
        price: 75000,
        release_date: 2016,
        name: 'Macbook Pro Gray 17"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
      },
      {
        size: 17,
        color: 'black',
        price: 80000,
        release_date: 2017,
        name: 'Macbook Pro Black 17"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
      },
    ],
    cartCounter: 0,
    cart: [],
  }

  increment = (evt) => {
    let name = evt.target.dataset.name;
    let result = this.state.laptops.find(el => el.name === name);
    this.setState(prev =>({
      cartCounter: prev.cartCounter + 1,
      cart: [...prev.cart, result],
    }))
  }

  render() {
    const {laptops, cartCounter, cart} = this.state;
    let sum = cart.reduce((acc, el) => acc + Number(el.price), 0).toFixed(2);
    return (
  <div className="allresult">
      <div className="formPlace">

      <div className="cart">
        {cart.map(el => <p className="cartInfo" key={el.name}>{el.name} {el.price}</p> )}
        <p className="counter total">Total Price {sum}</p>
      </div>

          <form className="form js-form">
            <section>
                <h2>Screen size</h2>
                <ul>
                <li><label><input className="input13" type="checkbox" name="size" value="13"/> 13"</label></li>
                <li><label><input type="checkbox" name="size" value="15"/> 15"</label></li>
                <li><label><input type="checkbox" name="size" value="17"/> 17"</label></li>
                </ul>
            </section>
            <section>
                <h2>Color</h2>
                <ul>
                <li><label><input type="checkbox" name="color" value="white"/> white</label></li>
                <li><label><input type="checkbox" name="color" value="gray"/> gray</label></li>
                <li><label><input type="checkbox" name="color" value="black"/> black</label></li>
                </ul>
            </section>
            <section>
                <h2>Release date</h2>
                <ul>
                <li><label><input type="checkbox" name="release_date" value="2015"/> 2015</label></li>
                <li><label><input type="checkbox" name="release_date" value="2016"/> 2016</label></li>
                <li><label><input type="checkbox" name="release_date" value="2017"/> 2017</label></li>
                </ul>
            </section>
            <button className="btn-filter" type="submit">Filter</button>
            <button className="btn-clear" type="reset">Clear</button>
          </form>      
        </div>
    
    <div className="cardProductPlace">
      {laptops.map( el => <Card  key = {el.name}  name={el.name} descr={el.descr} size={el.size} color={el.color} price={el.price} release_date={el.release_date} img={el.img} increment={this.increment}/>)} 
    </div>
  </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Menu from './Menu/Menu';
import './App.css';

class App extends Component {

  state = {
    contactText: '16 ноября 2017 Tesla провела презентацию электрического тягача Tesla Semi, поставки которого начнутся в 2019 году. Запас хода у электрогрузовика составляет примерно 800 км при загрузке в 40 тонн[29]. Иногда эта машина называется первой в мире в классе электрогрузовиков[30], однако модель была представлена позже MFTBC E-Fuso Vision One[31]',
  }

  render() {
    return (
      <div className="App">
        <Menu/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' render={ (props) => <Contact text={this.state.contactText} {...props}/>}/>  
        </Switch>
      </div>
    );
  }
}

export default App;
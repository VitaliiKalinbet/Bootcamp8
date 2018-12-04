import React, { Component } from 'react';
import './App.css';
import up from './up.jpg';
import down from './down.jpg';

class App extends Component {

  // // Mounting
  // componentWillMount () {
  // }

  state = {
   news: [],
   allNews: [], 
   serverStatus: '',
   pages: '',
   currentPage: 1,
  }

  render() {
    const { news } = this.state;
    return (
      <div className="App">
        <h2 className="title">The Guardian News</h2>
        <button className="refresh" onClick={this.refreshNewsOnScreen}>Refresh</button>
        <ul className="news-list">
          {/* из-за сломаного сервера:
          {this.state.serverStatus ? news.map(el => <li key={el.id} className='news-list-item'>{el.webTitle}</li>) : <p className="error">Sorry we couldn't find news for you. Please try again later.</p>}   */}
          {news.map(el => 
          <li key={el.id} className='news-list-item'>
            <p className={ el.readBody ? 'p-in-table another-background' : 'p-in-table'}>{el.title}
              <img data-id={el.id} onClick={this.toggleReadBody} className="img-arrow" src={el.readBody ? up : down} alt='arrow'/>
            </p> 
            <p className={el.readBody ? 'p-in-table-l-r' : 'p-in-table-l-r hidden'}>{el.body}
            </p>
          </li>)}
        </ul>
        <div className="navigation">
            <button disabled = {this.state.currentPage === 1 ? true : false} className="btn-pages" onClick={this.decreasePages}>&lt; Previous page </button>
            <p><span className="count">{this.state.currentPage}</span> of {this.state.pages} pages</p>
            <button disabled = {this.state.currentPage === 10 ? true : false} className="btn-pages" onClick={this.increasePages}> Next page &gt;</button>
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    this.goToTheLink('https://jsonplaceholder.typicode.com/posts');
  }

  refreshNewsOnScreen = () => {
    this.goToTheLink('https://jsonplaceholder.typicode.com/posts');
  }

  goToTheLink = (url) => {
    fetch(url)
    .then(res => res.json())
    .then(data => this.putDataFromServerInState(data))
    .catch(err => console.log(err));
  }

  putDataFromServerInState = (info) => {
    let result = info.slice(0, 10);
    this.setState({
      news: result.map(el => ({...el, readBody: false})),
      allNews: info.map(el => ({...el, readBody: false})),
      pages: info.length/10,
    });
  }

  toggleReadBody = (e) => {
    let id = e.target.dataset.id;
    this.setState({
      news: this.state.news.map(el => el.id === Number(id) ? {...el, readBody: !el.readBody}: el)
    })
  }

  increasePages = async () => {
    await this.setState( prevState => ({
      currentPage: prevState.currentPage + 1,
      }))
      this.filterArr();
  }

  filterArr = () => {
    let result;
    if (this.state.currentPage === 1) {
      result = this.state.allNews.filter( (el,index) =>
      index < this.state.currentPage * this.state.pages)
    } else if ( 1 < this.state.currentPage < this.state.pages) {
      result = this.state.allNews.filter( (el,index) =>
      index >= this.state.currentPage * 10 - this.state.pages && index <= this.state.currentPage * 10 - 1)
    }
    this.setState({
      news: result,
    })
  }

  decreasePages = async () => {
    await this.setState( prevState => ({
      currentPage: prevState.currentPage - 1,
      }))
      this.filterArr();
  }

  // из-за сломаного сервера:
  // putDataFromServerInState = (info) => {
  //   if (info.response.status === 'ok') {
  //     this.setState({
  //       news: info,
  //       serverStatus: true,
  //     })
  //   } else {
  //     this.setState({
  //       serverStatus: false,
  //     })
  //   }
  // }
}

export default App;

  

//end Mounting
  
//   // PropsChange
//   componentWillReceiveProps (newProps, currentProps) {
//   }
//   shouldComponentUpdate () {
//     // false только в случае проверки нашей, по умолчанию true
//   }
//   componentDidUpdate () {
//   }
//   //End PropsChange

//   // StateChange
//   shouldComponentUpdate () {
//     // false только в случае проверки нашей, по умолчанию true
//   }
//   componentWillUpdate () {
//   }
//   componentDidUpdate () {
//   }
//   //End PropsChange

//   // Unmouting
//   componentWillUnmount () {
//     // Переходим вчате на трелло, тут отключаем связь с сервером чата
//   }
//   //End Unmouting


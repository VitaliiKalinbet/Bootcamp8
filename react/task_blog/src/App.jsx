import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './redux/actions/blogAction';
import { searchForTitle, clear} from './redux/actions/searchAction';
import './App.css';

class App extends Component {

  state = {
    inputValue: '', 
  }

  hanndleChangeInput = (evt) => {
    this.setState({
      inputValue: evt.target.value,
    })
  }

  componentDidMount = () => {
    this.props.fetchData();
  }

  searchTitle = (evt) => {
    evt.preventDefault();
    this.props.searchForTitle(this.state.inputValue, this.props.post);
    console.log(this.state.inputValue);
    this.setState({
      inputValue: '',
    })
  }

  render() {
    return (
      <div className="App">
          {/* <button className='btn' onClick={this.props.fetchData}>Show posts</button> */}
          <form onSubmit={this.searchTitle}>
              <label className='input' htmlFor="">Search posts for title: <input value={this.state.inputValue} onChange={this.hanndleChangeInput} type="text"/></label>
          </form>
          <button className='input' onClick={this.props.clear}>Clear</button>
          <div className='all_posts'>
              {this.props.searchArr.length > 0 ? this.props.searchArr.map(el => <div key={el.title} className='card'>
                <h2>{el.title}</h2>
                <p>{el.body}</p>
                <h3>Author: {el.author}</h3>
                <h4>Quantity comment: {el.quantityComments}</h4>
              </div>)
              :
              this.props.post.map(el => <div key={el.title} className='card'>
                <h2>{el.title}</h2>
                <p>{el.body}</p>
                <h3>Author: {el.author}</h3>
                <h4>Quantity comment: {el.quantityComments}</h4>
              </div>)}
          </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
    return {
      post: state.post,
      searchArr: state.searchArr,
    }
}

function mapDispatchToProps (dispatch) { 
    return {
      fetchData: function () {
        dispatch(fetchData());
      },
      searchForTitle: function (title, post) {
        dispatch(searchForTitle(title, post));
      },
      clear: function () {
        dispatch(clear());
      },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
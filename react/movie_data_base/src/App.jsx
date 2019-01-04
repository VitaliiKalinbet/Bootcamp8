import React, { Component } from 'react';
import { connect } from 'react-redux';
import FilmCard from './Card/Card';
import ButtonClick from './ButtonClick/ButtonClick';
import Form from './Form/Form';
import { fetchDataget, postData, deleteFilm } from './redux/actions/filmsAction';
import {reset} from 'redux-form';
import { sortForAlphabet, sortForYear, sortForBudget, clearSort } from './redux/actions/sortAction.js';
import './App.css';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

class App extends Component {

  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  componentDidMount () {
    this.props.fetchDataget();
  }

  submit = values => {
    let newFilmObj = {
      title: values.title,
      description: values.description,
      year: values.year,
      budget: values.budget,
      actors: [...values.actors.split(',')],
      genres: [...values.genres.split(',')],
    }
    this.props.postData(newFilmObj);
    this.props.reset();
    this.handleClose();
  }

  deleteFilmOnId = (evt) => {
    let id = evt.target.id;
    console.log(evt.target.id);
    this.props.deleteFilm(Number(id));
  }

  render() {
    return (
      <div className="App">

          <div className='card_place'>
              {this.props.sortFilms.length > 0 ?  this.props.sortFilms.map(el => <FilmCard deleteFilmOnId={this.deleteFilmOnId} id={el.id} key={el.title} title={el.title} description={el.description} year={el.year} budget={el.budget} actors={el.actors} genres={el.genres}/>)
              :
              this.props.films.map(el => <FilmCard deleteFilmOnId={this.deleteFilmOnId} id={el.id} key={el.title} title={el.title} description={el.description} year={el.year} budget={el.budget} actors={el.actors} genres={el.genres}/>
              )}
          </div>
          <div className='form_and_btn_place'>
              <div className="div_four_btn">
                  <ButtonClick onClickFunc={() => this.props.sortForAlphabet(this.props.films)} text='По алфавиту'/>
                  <ButtonClick onClickFunc={() => this.props.sortForYear(this.props.films)} text='По году выхода'/>
                  <ButtonClick onClickFunc={() => this.props.sortForBudget(this.props.films)} text='По бюджету'/>
                  <ButtonClick onClickFunc={() => this.props.clearSort(this.props.films)} text='Сбросить сортировку'/>
              </div>
              
              <Modal
                  trigger={<Button onClick={this.handleOpen}>ДОБАВИТЬ ФИЛЬМ</Button>}
                  open={this.state.modalOpen}
                  onClose={this.handleClose}
                  basic
                  size='small'
                >
                  <Header icon='browser' content='Добавление фильма' />
                  <Modal.Content>
                      <Form onSubmit = {this.submit}/>
                  </Modal.Content>
              </Modal>
          </div>

      </div>
    );
  }
}

function mapStateToProps (state) {
    return {
      films: state.films,
      sortFilms: state.sortFilms,
    }
}

function mapDispatchToProps (dispatch) { 
    return {
      fetchDataget: function () {
        dispatch(fetchDataget());
      },
      postData: function (data) {
        dispatch(postData(data));
      },
      deleteFilm: function (id) {
        dispatch(deleteFilm(id));
      },
      reset: function () {
        dispatch(reset('addform'));
      },
      sortForAlphabet: function (films) {
        dispatch(sortForAlphabet(films));
      },
      sortForYear: function (films) {
        dispatch(sortForYear(films));
      },
      sortForBudget: function (films) {
        dispatch(sortForBudget(films));
      },
      clearSort: function (films) {
        dispatch(clearSort(films));
      },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
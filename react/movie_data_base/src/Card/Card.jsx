import React from 'react';
import './Card.css';
import { Button, Card } from 'semantic-ui-react';

const FilmCard = ({ title, description, year, budget, actors, genres, id, deleteFilmOnId }) => {
    return (
            <Card>
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>Описание фильма: {description}</Card.Meta>
                <Card.Description>
                    <p>Год выпуска: {year}</p>
                    <p>Бюджет: {budget}</p>
                    <ul>Актеры: {actors.map(actor => <li>{actor}</li>)}</ul>
                    <ul>Жанры: {genres.map(genre => <li>{genre}</li>)}</ul> 
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                <Button onClick={deleteFilmOnId} id={id} basic color='red'>
                    Delete
                </Button>
                </div>
            </Card.Content>
            </Card>
    );
};

export default FilmCard;
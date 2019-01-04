import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './Form.css';
import { Button, Icon} from 'semantic-ui-react';

let Form = (props) => {
    const { handleSubmit } = props;
    return (
        <form className='form' onSubmit={handleSubmit}>
            <Field className='input' placeholder='Название фильма' required name="title" component="input" type="text"/>
            <Field className='input' placeholder='Описание фильма' required name="description" component="input" type="text" />
            <Field className='input' placeholder='Год выхода' required name="year" component="input" type="text" />
            <Field className='input' placeholder='Бюджет' required name="budget" component="input" type="text" />
            <Field className='input' placeholder='Актеры (через запятую)' required name="actors" component="input" type="text" />
            <Field className='input' placeholder='Жанры фильма (через запятую)' required name="genres" component="input" type="text" />
            <Button color='green' type='submit' inverted><Icon name='checkmark' /> Добавить фильм</Button>
        </form>
    );
};

Form = reduxForm({
    form: 'addform'
})(Form);

export default Form;
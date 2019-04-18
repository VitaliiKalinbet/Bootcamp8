import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import {
    Grid,
    Form,
    Segment,
    Button,
    Header,
    Message,
    Icon
} from 'semantic-ui-react';
import axios from 'axios';

class Login extends Component {

    state = {
        email: '',
        password: '',
        data: '',
        secret: '',
    }

    handlerChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
        }) 
    }

    componentDidMount () {
        axios.get('http://localhost:3003/')
            .then(res => {
                this.setState({
                data: res.data,
                });
                // console.log(res.data);
        })
            .catch(err => console.log(err))
    }

    funcPostData = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3003/login', {
            email: this.state.email,
            password: this.state.password,
        })
        .then(res => {
            // this.setState({
            // data: res.data,
            // email: '',
            // password: '',
            // });
            console.log(res);
        })
        .catch(err => console.log(err))
    }

    funcGetSecret = () => {
        axios.get('http://localhost:3003/secret/1')
            .then(res => {
                this.setState({
                secret: res.data,
                });
                console.log(res);
            })
            .catch(err => console.log(err))
    }
    

    // isFormEmpty = ({email, password}) => {
    //     return !email.length > 0 || !password.length > 0
    // }

    // isFormValid = () => {
    //     let errors = [];
    //     let error;
    //     if (this.isFormEmpty(this.state)) {
    //         error = {
    //             message: 'Fill in all fields'
    //         };
    //         this.setState({
    //             errors: errors.concat(error)
    //         })
    //         return false;
    //     } else {
    //         this.setState({
    //             errors: []
    //         })
    //         return true;
    //     }
    // }

    // handleSubmit = (evt) => {
    //     evt.preventDefault();
    //     if (this.isFormValid()) {
    //         firebase
    //         .auth()
    //         .signInWithEmailAndPassword(this.state.email, this.state.password)
    //         .then(signedUser => {
    //             console.log(signedUser);
    //         })
    //         .catch(err => {
    //             console.error(err);
    //             this.setState({ errors: this.state.errors.concat(err)})
    //     })
    //     }
    // }

    // handleInput = (errors, inputName) => {
    //     return errors.some(el => el.message.toLowerCase().includes(inputName)) ? 'error' : '';
    // }

    render() {
        return (
            <Grid textAlign='center' verticalAlign='middle' className='app'>
                <Grid.Column style={{
                    maxWidth: 450
                }}>
                    <Header as='h2' icon color='green' textAlign='center'>
                        <Icon name='user circle' color='green'/>
                        Login to Chat
                    </Header>
                    <Form size='large' onSubmit={this.funcPostData}>
                        <Segment stacked>
                            
                            <Form.Input 
                            fluid
                            name='email'
                            icon='mail'
                            iconPosition='left'
                            placeholder="Enter email"
                            type='email'
                            onChange={this.handlerChange}
                            value={this.state.email}
                            required
                            autoFocus
                            />

                            <Form.Input
                            fluid
                            name='password'
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                            onChange={this.handlerChange}
                            value={this.state.password}
                            required
                            />

                            <Button type='submit' color='green' fluid size='large'>
                                Login
                            </Button>

                        </Segment>                 
                    </Form>

                    {this.state.data &&
                        <Message>
                        {this.state.data}
                        </Message> }

                    <Button onClick={this.funcGetSecret} type='submit' color='green' fluid size='large'>
                            Secret
                        </Button>

                    {this.state.secret &&
                    <Message>
                    {this.state.secret}
                    </Message> }

                </Grid.Column>        
            </Grid>
        );
    }
}

export default Login;
import React from 'react';
import './sign-in.styles.scss';

// component
import FormInput from '../form-input/form-input.component';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handlSubmit = e => {
        e.preventDefault();
        this.setState({
            email: '',
            password: ''
        });
    }

    handleChange = e => {
        const { value, name } = e.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handlSubmit}>
                    <FormInput
                    name='email'
                    type="text"
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    label='email'
                    required />
                    <FormInput
                        name='password'
                        type="password" 
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required />
                    <label>Password</label>
                    <input type="submit" value='Submit Form' />
                </form>
            </div>
        )
    }
}

export default SignIn;
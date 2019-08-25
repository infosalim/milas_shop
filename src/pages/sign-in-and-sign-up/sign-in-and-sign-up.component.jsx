import React from 'react';
import './sign-in-and-sign-up.styles.scss';

// component
import SingIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SingIn/>
        <SignUp/>
    </div>
);

export default SignInAndSignUpPage;
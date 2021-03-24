import Inputs from "./components/inputs";
import './style.css';
import React, {useState, useEffect} from 'react';

function Index() {
    const [username, setUsername] = useState('');
    const [password, setUserPassword] = useState('');
    const [email, setUserEmail] = useState('');

    function updateUsername(event){
        setUsername(event.target.value);
        console.log("Entering username");
    }

    function updateUserPassword(event) {
        setUserPassword(event.target.value);
        console.log("Entering password");
    }

    function updateUserEmail(event) {
        setUserEmail(event.target.value);
        console.log("Entering email");
    }

    return (
        <div className="main">

            <div className="sign-up">

                <div className="sign-up-container">

                    <div className="sign-up-content">

                        <form action="#" className="sign-up-form">
                            <h2 className="form-title">Create account</h2>

                            <div className="form-group">
                                <Inputs type="text" className="form-input" name="firstname" text="Your First Name"/>
                            </div>

                            <div className="form-group">
                                <Inputs type="text" className="form-input" name="lastname" text="Your Last Name"/>
                            </div>

                            <div className="form-group">
                                <Inputs type="email" className="form-input" name="email" text="Your Email"/>
                            </div>

                            <div className="form-group">
                                <Inputs type="password" className="form-input" name="password" text="Your Password"/>
                            </div>

                            <div className="form-group">
                                <Inputs type="email" className="form-input" name="email" text="Confirm Your Password"/>
                            </div>

                            <div className="form-group">
                                <Inputs type="checkbox" name="agree-term" id="agree-term"/>
                                <p className="agree-term-text">I agree to all statements in <span className="agree-term-link"> <a href="#">Terms of service</a></span></p>
                            </div>

                            <div className="form-group">
                                <Inputs type="submit" className="form-input" name="signup" placeholder="Signup"/>
                            </div>

                            <div className="form-group">
                                <p className="login-here-text">
                                    Already have an account ? <a href="#" className="login-here-link">Login here</a>
                                </p>
                            </div>
                          
                        </form>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Index;
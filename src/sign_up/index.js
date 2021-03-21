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
        <div className="wrapper">

            <div className="title">
                <h1>Create Account</h1>
            </div>

            <div className="form-container">

                <div className="form-inner">

                    <form action="#" className="login">

                        <div className="field">
                            <Inputs type="text" text="Your Username" event={updateUsername}/>
                        </div>

                        <div className="field">
                            <Inputs type="email" text="Your Email" event={updateUserEmail}/>
                        </div>

                        <div className="field">
                            <Inputs type="password" text="Your Password" event={updateUserPassword}/>
                        </div>

                        <div className="field">
                            <Inputs type="password" text="Confirm Password" event={updateUserPassword}/>
                        </div>

                        <div className="terms-text">
                            <Inputs type="radio"/>I agree to all statements in <a href="#">Terms of service</a>
                        </div>

                        <div className="field">
                            <Inputs type="submit" name="Sign UP"/>
                        </div>

                        <div className="login-text">
                            <p>Already have an account? <a href="">Login here</a></p>
                        </div>

                    </form>

                </div>

            </div>
            
        </div>
    )
}

export default Index;
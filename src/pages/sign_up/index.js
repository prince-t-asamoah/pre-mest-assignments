import Inputs from "../../components/inputs";
import Image from "../../components/image";
import './style.css';
import React, {useState} from 'react';

function Index() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setUserPassword] = useState('');
    const [email, setUserEmail] = useState('');

    function updateFirstName(event){
        setFirstName(event.target.value);
        console.log("Entering first name");
    }

    function updateLastName(event) {
        setLastName(event.target.value);
        console.log("Entering last name");
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
        <div className="main-container">

                <div className="image-container">
                    <Image />
                </div>

                <div className="sign-up-container">
                        <h1>Create account</h1>

                        <form action="#">

                            <div className="form-group">
                                <Inputs type="text"  event={updateFirstName} name="firstname" text="Your First Name"/>
                            </div>

                            <div className="form-group">
                                <Inputs type="text" name="lastname" text="Your Last Name" event={updateLastName}/>
                            </div>

                            <div className="form-group">
                                <Inputs type="email" name="email" text="Your Email" event={updateUserEmail}/>
                            </div>

                            <div className="form-group">
                                <Inputs type="password" name="password" text="Your Password" event={updateUserPassword}/>
                            </div>

                            <div className="form-group">
                                <Inputs type="email" name="email" text="Confirm Your Password" event={updateUserPassword}/>
                            </div>

                            <div className="form-group">
                                <Inputs type="checkbox" name="agree-term" id="agree-term"/>
                                <p className="agree-term-text">I agree to all statements in <span className="agree-term-link"> <a href="#">Terms of service</a></span></p>
                            </div>

                            <div className="form-group">
                                <Inputs type="submit"  name="Sign up" placeholder="Signup"/>
                            </div>

                            <div className="form-group">
                                <p className="login-here-text">
                                    Already have an account ? <a href="#" className="login-here-link">Login here</a>
                                </p>
                            </div>
                          
                        </form>

                </div>
                
        </div>
    )
}

export default Index;
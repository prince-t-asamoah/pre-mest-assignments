import Inputs from "./components/inputs";
import './style.css';

function Index() {
    return (
        <div className="wrapper">

            <div className="title">
                <h1>Create Account</h1>
            </div>

            <div className="form-container">

                <div className="form-inner">

                    <form action="#" className="login">

                        <div className="field">
                            <Inputs type="text" text="Your Username"/>
                        </div>

                        <div className="field">
                            <Inputs type="email" text="Your Email"/>
                        </div>

                        <div className="field">
                            <Inputs type="password" text="Your Password"/>
                        </div>

                        <div className="field">
                            <Inputs type="password" text="Confirm Password" />
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
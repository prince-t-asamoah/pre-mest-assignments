import Navbar from './formComponents/navbar';
import Button from './formComponents/button';
import Input from './formComponents/input';
import TextArea from './formComponents/textArea';
import SelectOption from './formComponents/selectOption';
import Typography from './formComponents/typography';
import './home.css';

function Home() {
    return(
        // Main starts here
            <div class='main'>

            {/* Contents starts here */}
                <div class='content'>

                {/* Navigation bar starts here */}
                    <div class='nav-bar'>
                        <Navbar/>
                    </div>
                {/* Navigation bar ends here */}

                    <h2>This is my homepage</h2>

                    {/* Buttons start here */}
                    <div class='button'>
                        <h3>Button Elements</h3>
                        <Button text="Clear" color="#D90B1C" />
                        <Button text="Login" color="#FAF566" />
                        <Button text="Cancel" color="#9ACFDD" />
                    </div>
                    {/* Buttons end here */}

                    {/* Inputs starts here */}
                    <div class='inputs'>
                        <h3>Input Elements</h3>
                        <div>
                            <label>Text</label>
                            <Input type='text' />
                        </div>
                        <div>
                            <label>Password</label>
                            <Input type='password' />
                        </div>
                        <div>
                            <label>Email</label>
                            <Input type='email' />
                        </div>
                        <div>
                            <label>Date</label>
                            <Input type='date' />
                        </div>

                        <div>
                            <label>Radio button</label>
                            <Input type='radio' />
                        </div>

                        <div>
                            <label>Checkbox</label>
                            <Input type='checkbox' />
                        </div>
                    </div>
                    {/* Inputs end here */}

                    {/* Area text starts here */}
                    <div class='area-text'>
                        <h3>Area textbox</h3>
                        <TextArea col='50' row='50'/>
                    </div>
                    {/* Area text ends here */}

                    {/* Selection starts here */}
                    <div class='selection-menu'>
                        <h3>Selection</h3>
                        <SelectOption name='music-genre'/>
                    </div>
                    {/* Selection ends end here */}

                    {/* Typography starts here */}
                    <div class='typo'>
                        <h3>Typography</h3>
                        <Typography
                        text='This is a simple text.'/>
                    </div>
                    {/* Typography ends here */}

                </div>
            {/* Contents end here */}
            

            </div>
        // Main ends here
    )
}
export default Home;
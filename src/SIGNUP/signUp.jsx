import './signUp.css'
import { Link } from "react-router-dom";

function SignUp(){
    return(
        <div className='cen'>
            <div className="SignUpContainer">
                <div className='SignUpHeader'>
                    <div className='SignUpTitle'>Create Your Account:</div>
                    <div className='SignUpSubtitle'>Sign up to follow and save reading progress.</div>
                </div>

                <form className='SignUpForm'>
                    <div className='FormGroup'>
                        <label htmlFor="text *">Username *</label>
                        <input 
                            id='user' 
                            type="text"
                            placeholder='Rover'
                            required
                        />
                    </div>

                    <div className='FormGroup'>
                        <label htmlFor="Email *">Email *</label>
                        <input 
                            id='label' 
                            type="email"
                            placeholder='Rover@gmail.com'
                            required
                        />
                    </div>

                    <div className='FormGroup'>
                        <label htmlFor="password">Password *</label>
                        <input 
                            id='password' 
                            type="password" 
                            placeholder='.........'
                            required
                        />
                    </div>

                    <div className='FormGroup'>
                        <label htmlFor="password">Confirm Password *</label>
                        <input 
                            id='password1' 
                            type="password" 
                            placeholder='.........'
                            required
                        />
                    </div>

                    <button type='submit'>Create Account</button>
                    <div>Already have an account ? <Link to="/signIn">Log In</Link></div>
                </form>
            </div>
            <Link className='backHome' to="/">BACK</Link>
        </div>
    );
}

export default SignUp
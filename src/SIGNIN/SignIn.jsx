import './signIn.css'
import { Link } from "react-router-dom";

function SignIn(){
    return(
        <div className='cen'>
            <div className="LoginContainer">
                <div className='LoginHeader'>
                    <div className='LoginTitle'>Welcome Back!</div>
                    <div className='LoginSubtitle'>Sign in to sync your library and reading progress.</div>
                </div>

                <form className='LoginForm'>
                    <div className='FormGroup'>
                        <label htmlFor="Email *">Email *</label>
                        <input 
                            id='label' 
                            type="email"
                            placeholder='xyz@gmail.com'
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

                    <button type='submit'>SIGN IN</button>
                    <div>Dont have an account ? <Link to="/signUp">Sign Up</Link></div>
                </form>
            </div>
            <Link className='backHome' to="/">BACK</Link>
        </div>
    );
}

export default SignIn;


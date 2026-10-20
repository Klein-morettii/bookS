import './signUp.css'
import { Link } from "react-router-dom";

function SignUp() {
    return (
        <div className="cen">

            <div className="SignUpContainer">

                <div className="SignUpHeader">
                    <div className="SignUpTitle">
                        Create Your Account
                    </div>

                    <div className="SignUpSubtitle">
                        Sign up to follow and save reading progress.
                    </div>
                </div>

                <form className="SignUpForm">

                    <div className="FormGroup">
                        <label htmlFor="username">Username *</label>
                        <input
                            id="username"
                            type="text"
                            placeholder="Rover"
                            required
                        />
                    </div>

                    <div className="FormGroup">
                        <label htmlFor="email">Email *</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Rover@gmail.com"
                            required
                        />
                    </div>

                    <div className="FormGroup">
                        <label htmlFor="password">Password *</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <div className="FormGroup">
                        <label htmlFor="confirmPassword">Confirm Password *</label>
                        <input
                            id="confirmPassword"
                            type="password"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button type="submit">
                        Create Account
                    </button>

                    <div className="LoginPrompt">
                        Already have an account?{" "}
                        <Link to="/signIn">Log In</Link>
                    </div>

                </form>
            </div>

            <Link className="backHome" to="/">BACK</Link>

        </div>
    );
}

export default SignUp;


import random from '../assets/dice-solid-full.svg';
import Search from './searchBar';
import { Link } from "react-router-dom";

function Header(){
    let logged = false;
    return (
        <header>
            <div className="leftH">
                
                <div className="siteName">Something</div>
            </div>

            <div className="rightH">
                <Search/>
                <img src={random} alt="gamble" className='random'/> 
                {logged? (
                    <button className="profileCircle">awsd</button>
                ):(
                    <Link className="profileSquare" to="/signIn">Log In</Link>
                )}
            </div>
        </header>
    );
}

export default Header;


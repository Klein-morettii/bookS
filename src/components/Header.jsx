import random from '../assets/dice-solid-full.svg';
import Search from './searchBar';

function Header(){
    return (
        <header>
            <div className="leftH">
                
                <div className="siteName">Something</div>
            </div>

            <div className="rightH">
                <Search/>
                <img src={random} alt="gamble" className='random'/> 
                <button className="profile"> asdf</button>
            </div>
        </header>
    );
}

export default Header;


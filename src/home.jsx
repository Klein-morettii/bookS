import { Link } from "react-router-dom";

import Header from './components/header/Header.jsx'
import Sidebar from './components/sidebar/SideBar.jsx';
import Footer from './components/footer/Footer.jsx';
import SmallCard from './components/CARD/Card.jsx';
import Carousel from './components/Carousel/Carousel.jsx';

import novelP from './assets/novelphoto1.png';
import lightnovel from './assets/lightnovel.webp'
import manga from './assets/manga.webp'
import manhwa from './assets/manhwa.webp'
import anime from './assets/anime.jpg'
import movie from './assets/movie.webp'
import games from './assets/games.webp'

function Home(){
    let logged = false;

    if(logged){
        return(
        <div className='app'>
                <Header/>
        
                <div className='middle'>
                <Sidebar/>
        
                <div className='main'>
                    main
                    <SmallCard/>
                    <Footer/>
                </div>
                </div>
            </div>
    );
    }
    else{
        return(
            <div className='app'>
                <Header/>
        
                <div className='middle'>
                    <Sidebar/>
        
                    <div className='main'>
                        <div className='herocontainer'>
                            <h2>SOMETHING</h2>
                            <div>
                                Discover, organize, and keep track of novels, light novels, manga, and manhwa, all in one place.
                                Build your personal library, save the stories you want to remember, and keep track of what you're reading.
                            </div>
                            <Link className='createAccount' to="/signUp"> Create Your Library </Link>
                            <div> We don't host chapters or provide reading content. We help you keep track of it. </div>
                        </div>

                        <div className='discover'>
                            <div>Explore By Type: </div>
                            <div className='grid'>

                                <Link className='grid-card' to="/signIn">
                                    <img className='imgD' src= {novelP} alt="novel" />
                                    {/* <div className='imgT'>NOVELS</div> */}
                                </Link>

                                <Link className='grid-card' to="">
                                    <img className='imgD' src={lightnovel} alt="lightnovel" />
                                </Link>

                                <Link className='grid-card' to=""> 
                                    <img className='imgD' src={manga} alt="Manga" />
                                </Link>

                                <Link className='grid-card' to=""> 
                                    <img className='imgD' src={manhwa} alt="Manhwa" />
                                </Link>

                                <Link className='grid-card' to=""> 
                                    <img className='imgD' src={anime} alt="Anime" />
                                </Link>

                                <Link className='grid-card' to=""> 
                                    <img className='imgD' src={movie} alt="Movies" />
                                </Link>

                                {/* <div className='grid-card'> 
                                    <img className='imgD' src={} alt="" />
                                </div>
                                <div className='grid-card'> MUSIC </div>  */}
                            </div>
                        </div>
                        
                        <Carousel carouselType="TRENDING"/>

                        <Footer/>
                    </div>
                </div>
            </div>
    );
    }
}

export default Home
import { Link } from "react-router-dom";

import Carousel from '../../components/carousel/Carousel.jsx';
import novelP from '../../assets/novelphoto1.png';
import lightnovel from '../../assets/lightnovel.webp'
import manga from '../../assets/manga.webp'
import manhwa from '../../assets/manhwa.webp'
import anime from '../../assets/anime.jpg'
import movie from '../../assets/movie.webp'
import games from '../../assets/games.webp'

function Home(){

    return(
        <>
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

                        <Link className='grid-card' to="/novel">
                            <img className='imgD' src= {novelP} alt="novel" />
                            <div className='imgT'>NOVELS</div>
                        </Link>

                        <Link className='grid-card' to="/lightNovel">
                            <img className='imgD' src={lightnovel} alt="lightnovel" />
                            <div className='imgT'>LIGHT NOVELS</div>
                        </Link>

                        <Link className='grid-card' to="/manga"> 
                            <img className='imgD' src={manga} alt="Manga" />
                            <div className='imgT'>MANGAS</div>
                        </Link>

                        <Link className='grid-card' to="/manhwa"> 
                            <img className='imgD' src={manhwa} alt="Manhwa" />
                            <div className='imgT'>MANHWAS</div>
                        </Link>

                        <Link className='grid-card' to="/anime"> 
                            <img className='imgD' src={anime} alt="Anime" />
                            <div className='imgT'>ANIMES</div>
                        </Link>

                        <Link className='grid-card' to="/movie"> 
                            <img className='imgD' src={movie} alt="Movies" />
                            <div className='imgT'>MOVIES</div>
                        </Link>

                        {/* <div className='grid-card'> 
                            <img className='imgD' src={} alt="" />
                        </div>
                        <div className='grid-card'> MUSIC </div>  */}
                    </div>
                </div>
                
                <Carousel carouselType="TRENDING"/>
            </div>
        </>
    );
}

export default Home
import Header from './components/header/Header.jsx'
import Sidebar from './components/sidebar/sideBar.jsx';
import Footer from './components/footer/Footer.jsx';
import SmallCard from './components/CARD/card.jsx';
import { Link } from 'react-router-dom';
import Carousel from './components/Carousel/carousel.jsx';

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
                            <div className='grid-card'> NOVEL </div>
                            <div className='grid-card'> LIGHT NOVEL </div>
                            <div className='grid-card'> MANGA </div>
                            <div className='grid-card'> MANHWA </div>
                            <div className='grid-card'> ANIME </div>
                            <div className='grid-card'> MOVIES </div>
                            {/* <div className='grid-card'> GAMES </div>
                            <div className='grid-card'> MUSIC </div> */}
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
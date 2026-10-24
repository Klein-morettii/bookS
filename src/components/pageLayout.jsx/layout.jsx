import { Link } from "react-router-dom";

import Carousel from "../Carousel/Carousel.jsx";
import Header from '../header/Header.jsx'
import Sidebar from "../sidebar/SideBar.jsx";
import Footer from "../footer/Footer.jsx";

import './layout.css'


function Layout(){

    return (
        <>
            <Header/>

            <div className='middle'>
                <Sidebar/>
        
                <div className='main'>
                    <Carousel carouselType="TRENDING"/>

                    <Footer/>
                </div>
            
            </div>
        </>
    )
}

export default Layout
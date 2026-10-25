import { Link, Outlet } from "react-router-dom";

import Header from '../header/Header.jsx'
import SideBar from "../sidebar/SideBar.jsx";
import Footer from "../footer/Footer.jsx";

import './layout.css'


function PageLayout(){

    return (
        <>
            <Header/>

            <div className='middle'>
                <SideBar/>
        
                <div className='main'>

                    <Outlet />

                    <Footer/>
                </div>
            
            </div>
        </>
    )
}

export default PageLayout
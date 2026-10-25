import { Link, Outlet } from "react-router-dom";

import Header from '../header/Header.jsx'
import sidebar from "../sidebar/SideBar.jsx";
import Footer from "../footer/Footer.jsx";

import './layout.css'


function PageLayout(){

    return (
        <>
            <Header/>

            <div className='middle'>
                <sidebar/>
        
                <div className='main'>

                    <Outlet />

                    <Footer/>
                </div>
            
            </div>
        </>
    )
}

export default PageLayout
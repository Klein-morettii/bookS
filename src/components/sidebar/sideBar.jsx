import { Link } from "react-router-dom";

import './sidebar.css'

function Sidebar(){

    return(
        <div className="sideBar">
            <div className="discover">
                <h3 className="sideHeading">DISCOVER</h3>
                <Link to='/' className="sideText" >HOME</Link>
                <Link to='/novel' className="sideText">NOVELS</Link>
                <Link to='/lightNovel' className="sideText">LIGHT NOVELS</Link>
                <Link to='/manga' className="sideText">MANGAS</Link>
                <Link to='/manhwa' className="sideText">MANHWAS</Link>
                <Link to='/anime' className="sideText">ANIMES</Link>
                <Link to='/movie' className="sideText">MOVIES</Link>
                <Link to='/ranking' className="sideText">RANKING</Link>
            </div>

            <div className="user">
                <h3 className="sideHeading">USER</h3>
                <Link to="/profile" className="sideText"> PROFILE</Link>
                <Link to="/library" className="sideText">LIBRARY</Link>
                {/* <div className="sideText"></div> */}

            </div>

            <div className="misc">
                <h3 className="sideHeading">MISC</h3>
                <Link to="/setting" className="sideText">SETTINGS</Link>
                <Link to="/contactUs" className="sideText">CONTACT US</Link>
                {/* {logged && <div> LOG OUT</div>}  */}               
                <div></div>
            </div>
        </div>
    );
}

export default Sidebar;
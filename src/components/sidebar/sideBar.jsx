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
                <Link to='/movies' className="sideText">MOVIES</Link>
                <Link to='/ranking' className="sideText">RANKING</Link>
                <Link to='/browse' className="sideText">BROWSE</Link>
            </div>

            <div className="user">
                <h3 className="sideHeading">USER</h3>
                <div className="sideText"> PROFILE</div>
                <div className="sideText">LIBRARY</div>
                {/* <div className="sideText"></div> */}

            </div>

            <div className="misc">
                <h3 className="sideHeading">MISC</h3>
                <div className="sideText">SETTINGS</div>
                <div className="sideText">CONTACT US</div>
                {/* {logged && <div> LOG OUT</div>}  */}               
                <div></div>
            </div>
        </div>
    );
}

export default Sidebar;
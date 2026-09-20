import { Link } from "react-router-dom";

function Sidebar(){

    return(
        <div className="sideBar">
            <div className="discover">
                <h3 className="sideHeading">DISCOVER</h3>
                <Link to='/' className="sideText" href="">HOME</Link>
                <Link to='/novel' className="sideText" href="">NOVELS</Link>
                <Link to='/lightNovel' className="sideText" href="">LIGHT NOVELS</Link>
                <Link to='/mangas' className="sideText" href="">MANGAS</Link>
                <Link to='/manhwas' className="sideText" href="">MANHWAS</Link>
                <Link to='/ranking' className="sideText" href="">RANKING</Link>
                <Link to='/browse' className="sideText" href="">BROWSE</Link>
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
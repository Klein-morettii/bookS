
function Sidebar(){

    return(
        <div className="sideBar">
            <div className="discover">
                <h3 className="sideHeading">DISCOVER</h3>
                <div className="sideText">NOVELS</div>
                <div className="sideText">LIGHT NOVELS</div>
                <div className="sideText">MANGAS</div>
                <div className="sideText">MANHWAS</div>
                <div className="sideText">RANKING</div>
                <div className="sideText">BROWSE</div>
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
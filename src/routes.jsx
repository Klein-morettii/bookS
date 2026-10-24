import { Route, Routes } from "react-router-dom"
import Home from "./Home.jsx"; 
import SignIn from "./components/SIGNIN/SignIn.jsx";
import SignUp from "./components/SIGNUP/SignUp.jsx";

function RouteNavigation () {
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/signIn" element={<SignIn/>}/>
            <Route path="/signUp" element={<SignUp/>}/>
        </Routes> 
    );
}

export default RouteNavigation
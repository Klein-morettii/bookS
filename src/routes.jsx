import { Route, Routes } from "react-router-dom"
import Home from "./home.jsx"; 
import SignIn from "./components/SIGNIN/SignIn.jsx";
import SignUp from "./components/SIGNUP/signUp.jsx";

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
import { Route, Routes } from "react-router-dom"

import Home from "./home.jsx"; 
import SignIn from "./components/sign-in/SignIn.jsx";
import SignUp from "./components/sign-up/SignUp.jsx";
import Layout from "./components/pageLayout/Layout.jsx";

function RouteNavigation () {
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/signIn" element={<SignIn/>}/>
            <Route path="/signUp" element={<SignUp/>}/>
            <Route path="/novel" element={<Layout/>}/>
            <Route path="/lightNovel" element={<Layout/>}/>
            <Route path="/manga" element={<Layout/>}/>
            <Route path="/manhwa" element={<Layout/>}/>
            <Route path="/anime" element={<Layout/>}/>
            <Route path="/movies" element={<Layout/>}/>
        </Routes> 
    );
}

export default RouteNavigation
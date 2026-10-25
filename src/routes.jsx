import { createBrowserRouter } from "react-router-dom";

import PageLayout from './components/pageLayout/PageLayout.jsx'
import Home from "./pages/home/home.jsx";
import SignIn from "./components/sign-in/SignIn.jsx";
import SignUp from "./components/sign-up/SignUp.jsx";
import Anime from "./pages/anime/Anime.jsx";
import LightNovel from "./pages/lightNovel/LightNovel.jsx";
import Manga from "./pages/manga/Manga.jsx";
import Manhwa from "./pages/manhwa/Manhwa.jsx";
import Movie from "./pages/movies/Movie.jsx";
import Novel from "./pages/novel/Novel.jsx";
import UnderConstruction from "./pages/ranking/ranking.jsx";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/anime",
          element: <Anime/>,
        },
        {
          path: "/lightNovel",
          element: <LightNovel/>,
        },
        {
          path: "/manga",
          element: <Manga/>,
        },
        {
          path: "/manhwa",
          element: <Manhwa/>,
        },
        {
          path: "/movie",
          element: <Movie/>,
        },
        {
          path: "/novel",
          element: <Novel/>,
        },
        {
          path: "/ranking",
          element: <UnderConstruction/>
        },
        {
          path: "/profile",
          element: <UnderConstruction/>,
        },
        {
          path: "/library",
          element: <UnderConstruction/>,
        },
        {
          path: "/setting",
          element: <UnderConstruction/>,
        },
        {
          path: "/contactUs",
          element: <UnderConstruction/>,
        },
      ]
    },

    {
      path: "/signIn",
      element: <SignIn/>,
    },
    {
      path: "/signUp",
      element: <SignUp/>,
    },
    
  ],

  {
    basename: "/bookS/",
  }
)


export default router




/* below is the way to use the basic browser router  */

/* import {BrowserRouter} from 'react-router-dom'
import RouteNavigation from './routes'

function App() {
  return(  
    <BrowserRouter basename='/bookS/'>
      <RouteNavigation/>
    </BrowserRouter>
  );
}

export default App
 */

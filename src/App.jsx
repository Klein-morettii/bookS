import {BrowserRouter} from 'react-router-dom'
import RouteNavigation from './routes'

function App() {
  return(  
    <BrowserRouter basename='/home'>
      <RouteNavigation/>
    </BrowserRouter>
  );
}

export default App

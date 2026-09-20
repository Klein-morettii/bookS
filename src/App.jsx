import {BrowserRouter} from 'react-router-dom'
import RouteNavigation from './routes'

function App() {
  return(  
    <BrowserRouter basename='/bookS/'>
      <RouteNavigation/>
    </BrowserRouter>
  );
}

export default App

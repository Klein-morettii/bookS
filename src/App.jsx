import Header from './components/Header.jsx'
import Sidebar from './components/sideBar.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return(
    <div className='app'>
        <Header/>

        <div className='middle'>
          <Sidebar/>

          <div className='main'>
            main

            <Footer/>
          </div>
        </div>
    </div>
  );
}

export default App

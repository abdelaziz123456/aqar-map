import  Navbar from './Components/Header'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import Footer from './Components/Footer';
import { BrowserRouter,Route } from 'react-router-dom';
import MainContent from './Components/MainContent';
function App() {
  return (

    <BrowserRouter>
    <div  className="app  my-3 ">
    <Navbar/>
    <Route exact path='/'>
      <MainContent/>
    </Route >
    <Route exact path='/sign-in'>
      
    </Route>
    <Footer/>
      
    </div>
       
    </BrowserRouter>
  );
}

export default App;

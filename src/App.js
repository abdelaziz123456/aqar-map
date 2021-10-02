import  Navbar from './Components/Header'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import Footer from './Components/Footer';
import { BrowserRouter,Route } from 'react-router-dom';
import MainContent from './Components/MainContent';
import SignIn from './Components/SignIn';
import ForgetPassword from './Components/ForgetPass';
import EnterPass from './Components/EnterPass';
import SignUp from './Components/SignUp';
import ContactUs from './Components/ContactUs';
function App() {
  return (

    <BrowserRouter>
    <div  className="app  my-3 ">
    <Navbar/>
    
    <Route exact path='/'>
      <MainContent/>
    </Route >

    <Route exact path='/sign-in'>
      <SignIn/>
    </Route>

    <Route exact path='/forget-password'>
      <ForgetPassword/>
    </Route>


    <Route exact path='/enter-password'>
      <EnterPass/>
    </Route>

    <Route exact path='/sign-up'>
      <SignUp/>
    </Route>

    <Route exact path='/contact-us'>
      <ContactUs/>
    </Route>



    <Footer/>
      
    </div>
       
    </BrowserRouter>
  );
}

export default App;

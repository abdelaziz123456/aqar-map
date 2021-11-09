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
import About from './Components/About';
import Privacy from './Components/Privacy';
import Buy from './Components/Buy';
import Sell from './Components/Sell';
import ApartDetails from './Components/ApartDetails';
import Rent from './Components/Rent';
import { useState } from 'react';
import AccountDetails from './Components/AccountDetails';
function App() {

  const [isLogged,setIsLogged]=useState(false)
  return (

    <BrowserRouter>
    <div  className="app  my-3 ">
    <Navbar isLogged={isLogged} setIsLogged={setIsLogged}/>
    
    <Route exact path='/aqar-map'>
      <MainContent/>
    </Route >

    <Route exact path='/sign-in'>
      <SignIn setIsLogged={setIsLogged} isLogged={isLogged}/>
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

    <Route exact path='/about'>
      <About/>
    </Route>


    <Route exact path='/privacy'>
      <Privacy/>
    </Route>

    <Route exact path='/buy'>
      <Buy/>
    </Route>

    <Route exact path='/sell'>
      <Sell isLogged={isLogged}/>
    </Route>


    <Route exact path='/rent'>
      <Rent/>
    </Route>

    <Route exact path='/account-details'>
      <AccountDetails/>
    </Route>

    <Route  path='/apart-details/:id' render={(props)=>{
      return <ApartDetails {...props}/>
    }}/>
     



    <Footer/>
      
    </div>
       
    </BrowserRouter>
  );
}

export default App;

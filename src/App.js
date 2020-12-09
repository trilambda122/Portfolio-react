import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Home from "./components/Home"
import ContEduction from "./components/ContEducation"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Portfolio from "./components/Portfolio"
import Resume from "./components/Resume"
import Error from "./components/Error"

function App() {
  return (
  <Router basename={process.env.PUBLIC_URL}>
      <Header/>
  <Switch>
    
      <Route exact path='/'>
        <Home/>
      </Route>

      <Route path='/conteduction'>
        <ContEduction/>
      </Route>

      <Route path='/experince'>
        <Resume/>
      </Route>

      <Route path='/portfolio'>
        <Portfolio/>
      </Route>

      <Route path="*">
        <Error/>
      </Route>

    
  </Switch>
    <Footer/> 
  </Router>

  );
}

export default App;

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import NavBar from './components/Navbar.js';
import MainPage from './components/MainPage.js'
import EnforcersContainer from "./components/EnforcersContatiner";
import OffendersContainer from "./components/OffendersContainer";


function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/enforcers">
          <EnforcersContainer/>
        </Route>
        <Route path="/offenders">
          <OffendersContainer/>
        </Route>
        {/* <Route path="/citations">
          
        </Route> */}
        <Route path="*">
          <Redirect to="/"/>
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;

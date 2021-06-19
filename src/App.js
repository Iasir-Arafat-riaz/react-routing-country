import './App.css';
import Home from "./component/Home/Home"
import Error from "./component/Error/Error"
import CountryDetails from "./component/CountryDetails/CountryDetails"
import NewCountry from "./component/NewCountry/NewCountry"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>

          </Route>
          
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/country/:countryDetails">
            <CountryDetails></CountryDetails>
          </Route>
         
          <Route path="*">
            <Error></Error>
          </Route>
          
          
        </Switch>
      </Router>

    </div>
  );
}

export default App;

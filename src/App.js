// import { useEffect } from 'react';
import './App.css';
import Home from './components/Home/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import TeamDetails from './components/TeamDetails/TeamDetails';

function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route path='/home'>
            <Home ></Home>
          </Route>
          <Route path='/teamDetails/:teamId'>
            <TeamDetails></TeamDetails>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;

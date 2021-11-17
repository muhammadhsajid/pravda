import { useState, useEffect } from 'react';

import GoogleLogin from './Login';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Home';
import firebase from './firebase';
import Register from "./Register";
import Reset from "./Reset";

import './App.css';



function App() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    })
  }, [])

  console.log(user);
  
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={GoogleLogin} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/reset" component={Reset} />
          <Route exact path="/home" component= {Home} />
        </Switch>
      </Router>
    </div>
  );
}

/*
<div className="app">
	{user ? <Home user ={user} /> : <GoogleLogin />}
    </div>
*/

export default App;
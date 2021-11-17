import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Profile } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/profile" exact component={() => <Profile />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
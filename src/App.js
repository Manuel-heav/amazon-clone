import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from './Header'
import Home from './Home'
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
          <Header />
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <h1>Login Page</h1>
          </Route>

          {/* Bottom one Is the default route */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

 {/* We need React-router */}
      {/* Multi page functionality in a single page app */}
      {/* The first page we see is basically the root folder if the website is like codapol.com then the basic react app is codapol.com/ */}

export default App;

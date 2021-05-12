import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from './Header'
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <h1>Login Page</h1>
          </Route>

          {/* Bottom one Is the default route */}
          <Route path="/">
            <Header />
            <h1>Home Page</h1>
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

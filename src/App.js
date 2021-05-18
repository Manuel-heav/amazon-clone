import { useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from './Header'
import Home from './Home'
import CheckOut from './CheckOut'
import Login from './Login'
import { useStateValue } from './StateProvider';
import { auth } from './Firebase';
function App() {

  const [{ user }, dispatch] = useStateValue();


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        // user logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else{
        dispatch({
          type: "SET_USER",
          user: null
        });
        // user logged out
      }
    });
    return () => {
      unsubscribe();
    }
  }, [])
  console.log("USer is >>>", user)

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
          <Header />
          <CheckOut />
          </Route>
          <Route path="/login">
            <Login />
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

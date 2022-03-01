import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom';
import Home from './Home';
import Users from './Users';
import About from './About';
import ErrorPage from './Error';
// import User from './User';

function Navigator() {
  return (
    <Router>
      <div>This is Navigator component</div>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink
                exact
                to="/"
                activeStyle={{
                  backgroundColor: 'black',
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                activeStyle={{
                  backgroundColor: 'black',
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                activeStyle={{
                  backgroundColor: 'black',
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/users" component={Users}></Route>
          <Route path="*" component={ErrorPage}></Route>
        </Switch>
      </div>
    </Router>
  );
}
export default Navigator;

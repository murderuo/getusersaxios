import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink, Switch, Route, useRouteMatch } from 'react-router-dom';
import User from '../User';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { path, url } = useRouteMatch();

  // console.log(path, url);

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users/')
      .then(response => setUsers(response.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div>Users page Component</div>
      {loading && <div>Loading...</div>}
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <NavLink
              to={`${url}/${user.id}`}
              activeStyle={{
                backgroundColor: 'black',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              {user.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a user.</h3>
        </Route>
        <Route path={`${path}/:id`} component={User} />
      </Switch>
    </>
  );
}

export default Users;

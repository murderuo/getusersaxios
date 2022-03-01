import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function User() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //   console.log(id);
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => setData(response.data))
      .finally(() => setLoading(false));
    // console.log(data);
  }, [id]);

  useEffect(() => {
    let details = [];
    for (const prop in data) {
      details.push(`${prop}:${data[prop]}`);
    }
    setUser(details);
  }, [data]);

  return (
    <>
      <hr />
      <div>This is user component </div>
      {loading && <div>Loading...</div>}
      <div>user id: {id}</div>
      <ul>
        {user.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {/* <code>{!loading && JSON.stringify(data)}</code> */}
    </>
  );
}

export default User;

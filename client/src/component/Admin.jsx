import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.css'; 

function Admin() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState(); 

  useEffect(() => {
    axios.get('http://localhost:8000/api/enquiries')
      .then(response => setUsers(response.data))
      .catch(err => console.log(err));
  }, []);

  const filteredUsers = users.filter(user => user.status === filter);

  return (
    <div className="container">
      <div className="button-group">
        <h2 className='text'>Admin Console</h2>
        <button onClick={() => setFilter('New')}>New</button>
        <button onClick={() => setFilter('Pending')}>Pending</button>
        <button onClick={() => setFilter('Completed')}>Completed</button>
      </div>
      <div className="user-cards">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>{user.message}</td>
                <td><button>pending</button> 
                <button>Completed</button>
                <button>delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>  
    </div>
  );
}

export default Admin;
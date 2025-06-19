import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/students')
      .then((res) => {
        console.log('Student data from DB:', res.data);
        setData(res.data);
      })
      .catch((err) => console.error('Error:', err));
  }, []);

  return (
    <div className='my-3'>
      <h2 className='my-3'>Student List</h2>
      <table className='table table-bordered'>
        <thead className='table-dark'>
          <tr>
            <th >ID</th>
            <th>FIRSTNAME</th>
            <th>LASTNAME</th>
            <th>EMAIL</th>
                  <th style={{ minWidth: '180px' }}>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) && data.length > 0 ? (
            data.map((student) => (
              <tr>
                <td>{student.id}</td>
                <td>{student.firstname}</td>
                <td>{student.lastname}</td>
                <td>{student.email}</td>
                <td>
                  <div className="d-flex justify-content-center gap-2 flex-wrap">
            <Link className="btn btn-success btn-sm" to={`/read/${student.id}`}>Read</Link>
            <Link className="btn btn-primary btn-sm" to={`/edit/${student.id}`}>Edit</Link>
            <button className="btn btn-danger btn-sm">Delete</button>
            </div>
                </td>
              </tr>
              
            ))
          ) : (
            <tr>
              <td colSpan="5" className='text-center'>No students found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Home;

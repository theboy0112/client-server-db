import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Create() {
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: ''
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:5175/students', values)
      .then(res => {
        console.log(res.data);
        navigate('/');
      })
      .catch(err => console.log(err));
  }

  return (
    <div className='min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center'>
      <div className='w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg'>
        <div className='flex justify-end mb-4'>
          <Link to="/" className='text-2xl font-bold mb-4 text-center'>Home</Link>
        </div>
        <h3 className='text-2xl font-bold mb-4 text-center'>Add Students</h3>
        <form onSubmit={handleSubmit}>
          <div className='block mb-1 text-blue-400'>
            <label className='text-blue-600 font-semibold' htmlFor='firstname'>Firstname:&nbsp;</label>
            <input className='bg-gray-900' type='text' id='firstname' name='firstname' 
            required w-full p-2 rounded bg-gray-700 onChange={handleChange} />
          </div>
          <div className='form-group my-3'>
            <label className='text-blue-600 font-semibold' htmlFor='lastname'>Lastname:&nbsp;&nbsp;</label>
            <input className='bg-gray-900' type='text' id='lastname' name='lastname' 
            required onChange={handleChange} />
          </div>
          <div className='form-group my-3'>
            <label className='text-blue-600 font-semibold' htmlFor='email'>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input className='bg-gray-900' type='email' id='email' name='email' 
            required onChange={handleChange} />
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
            Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;

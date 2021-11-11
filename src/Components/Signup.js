import React, { useState, useEffect } from 'react';

const Signup = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    // storing input fields
    localStorage.setItem('name', JSON.stringify(name));
    localStorage.setItem('phone', JSON.stringify(phone));
    localStorage.setItem('email', JSON.stringify(email));
    localStorage.setItem('password', JSON.stringify(password));
  }, [name, phone, email, password]);
  const handleFormSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem('name', JSON.stringify(name));
    localStorage.setItem('phone', JSON.stringify(phone));
    localStorage.setItem('email', JSON.stringify(email));
    localStorage.setItem('password', JSON.stringify(password));
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className="container w-50">
        <div className="form-group">
          <label for="exampleInputPassword1">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Phone Number</label>
          <input
            type="number"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="dropdown mt-3 mb-3">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Dropdown button
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              DBA
            </a>
            <a className="dropdown-item" href="#">
              BA
            </a>
            <a className="dropdown-item" href="#">
              SE
            </a>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Signup;

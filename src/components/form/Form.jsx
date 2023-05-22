import React, { useState } from 'react';
import './Form.module.css';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Realizar acciones con los datos del formulario
    console.log('Email:', email);
    console.log('Password:', password);
    // Restablecer los campos del formulario
    setEmail('');
    setPassword('');
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-input"
        />
      </div>
      <button type="submit" className="form-button">Submit</button>
    </form>
  );
};

export default Form;
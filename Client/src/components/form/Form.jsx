import React, { useState } from 'react';
import styles from "./Form.module.css";

const Form = ({ onLogin, access }) => {
  const [userData, setUserData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
            onLogin(userData);
          setUserData({ email: '', password: '' });
      setErrors({});
    } else {
        setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};

    
    if (!userData.email) {
      errors.email = 'El email es requerido';
    } else if (!isValidEmail(userData.email)) {
      errors.email = 'El email no es válido';
    } else if (userData.email.length > 35) {
      errors.email = 'El email no puede tener más de 35 caracteres';
    }

     if (!userData.password) {
      errors.password = 'La contraseña es requerida';
    } else if (!hasNumber(userData.password)) {
      errors.password = 'La contraseña debe contener al menos un número';
    } else if (userData.password.length < 6 || userData.password.length > 10) {
      errors.password = 'La contraseña debe tener entre 6 y 10 caracteres';
    }
    return errors;
  };

  const isValidEmail = (email) => {
     return true;
  };

  const hasNumber = (str) => {
    return /\d/.test(str);
  };

  return (
    <form className={styles["form-container"]} onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          className={styles["form-input"]}
          disabled={access}
          autoFocus
        />
        {errors.email && <span className={styles["error-message"]}>{errors.email}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          className={styles["form-input"]}
          disabled={access}
          autoFocus
        />
        {errors.password && <span className={styles["error-message"]}>{errors.password}</span>}
      </div>
      <button type="submit" className={styles["form-button"]} disabled={access}>Submit</button>
    </form>
  );
};

export default Form;

export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return 'El email es requerido';
    } else if (!emailRegex.test(email)) {
      return 'El email no es válido';
    } else if (email.length > 35) {
      return 'El email no puede tener más de 35 caracteres';
    }
    return '';
  };
  
  export const validatePassword = (password) => {
    const passwordRegex = /\d/;
    if (!password) {
      return 'La contraseña es requerida';
    } else if (!passwordRegex.test(password)) {
      return 'La contraseña debe contener al menos un número';
    } else if (password.length < 6 || password.length > 10) {
      return 'La contraseña debe tener entre 6 y 10 caracteres';
    }
    return '';
  };
  
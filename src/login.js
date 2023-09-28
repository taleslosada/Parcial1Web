import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [step, setStep] = useState(1); // 1 para el paso de correo, 2 para el paso de contraseña
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = () => {
    // Validación de formato de correo electrónico 
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailRegex)) {
      setEmailError('El correo electrónico no es válido');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validatePassword = () => {
    // Validación de longitud mínima de la contraseña
    if (password.length < 6) {
      setPasswordError('La contraseña debe tener al menos 6 caracteres');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (validateEmail()) {
        setStep(2);
      }
    } else if (step === 2) {
      if (validatePassword()) {
        // Realizar la autenticación aquí (por ejemplo, enviar una solicitud POST al backend)
        // Si la autenticación es exitosa, puedes redirigir al usuario a la página principal
      }
    }
  };

  return (
    <div>
      {step === 1 ? (
        <div>
          <h1>Ingrese su correo electrónico</h1>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="error">{emailError}</p>}
        </div>
      ) : (
        <div>
          <h1>Ingrese su contraseña</h1>
          <p>Correo ingresado: {email}</p>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p className="error">{passwordError}</p>}
        </div>
      )}
      <button onClick={handleNextStep}>Siguiente</button>
    </div>
  );
}


export default Login;


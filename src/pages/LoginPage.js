import React from 'react';

const LoginPage = () => {
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="login">
          Podaj login
          <input type="text" id="login" />
        </label>
        <label htmlFor="passw">
          Podaj hasło
          <input type="password" id="passwd" />
        </label>
        <button>zaloguj</button>
      </form>
    </div>
  );
};

export default LoginPage;

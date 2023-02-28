import React from 'react';

import '../styles/LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login">
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

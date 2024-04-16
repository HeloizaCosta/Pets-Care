// App.js

import React from 'react';
import './App.css';
import logo from './logo.png'; // Importe sua imagem de logo aqui

function HomeApp() {
  return (
    <div className="home-container">
      <img src={logo} alt="Logo" className="logo" /> {/* Adicione o logo aqui */}
      <h1>Bem Vindo ao Pet's Care!</h1>
    </div>
  );
}

function Login() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
      <label htmlFor="nome" className="login-label">Email ou Telefone</label>
        <input type="text" placeholder="Digite seu email ou telefone..." />
        <label htmlFor="nome" className="login-label">Senha</label>
        <input type="password" placeholder="Digite sua senha..." />
        <button type="submit">Login</button>
      </form>
      <div className="social-login">
        <button>Facebook</button>
        <button>Google</button>
      </div>
    </div>
  );
}

function Cadastro() {
  return (
    <div className="cadastro-container">
      <h2>Cadastrar</h2>
      <form>
        <label htmlFor="nome" className="cadastro-label">Nome</label>
        <input type="text" placeholder="Digite seu nome..." />
        <label htmlFor="email" className="cadastro-label">Email</label>       
        <input type="text" placeholder="Digite seu email..." />
        <label htmlFor="Telefone" className="cadastro-label">Telefone</label>
        <input type="text" placeholder="Digite seu telefone..." />
        <button type="submit">Cadastrar</button>
      </form>
      <div className="terms">
        <input type="checkbox" id="terms" />
        <label htmlFor="terms">Li e aceito os termos.</label>
      </div>
      <div className="social-login">
        <button>Facebook</button>
        <button>Google</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <HomeApp />
      <div className="form-container">
        <Login />
        <Cadastro />
      </div>
    </div>
  );
}

export default App;

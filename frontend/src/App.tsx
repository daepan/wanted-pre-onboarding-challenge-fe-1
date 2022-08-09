import React from 'react';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { setTokenOnHeader } from './api/login';
import AuthForm from './components/Auth/AuthForm';
import AuthPage from './pages/AuthPage';

const GlobalStyle = createGlobalStyle`
 width: 100vw;
 heigh: 100vh;
 margin: 0;
 padding: 0;
`;

function App() {
  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token != null) {
      setTokenOnHeader(token);
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="Auth/*" element={<AuthPage />}>
          <Route path="auth" element={<AuthForm />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

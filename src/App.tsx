import React from 'react';
import Header from './components/Header/Header';
import { Router,Routes,Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { setTokenOnHeader } from './api/login';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import AuthPage from './pages/AuthPage';

const GlobalStyle = createGlobalStyle`
 width: 100vw;
 heigh: 100vh;
 margin: 0;
 padding: 0;
`

function App() {

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token != null) {
      setTokenOnHeader(token);
    }
  }, []);

  return (
   <>
    <GlobalStyle/>
      <Header/>
        <Routes>
          <Route path="Auth/*" element={<AuthPage/>}>
            <Route path="login" element={<SignIn/>}/>
            <Route path="create" element={<SignUp/>}/>
          </Route>
        </Routes>
  
   </>
  );
}

export default App;
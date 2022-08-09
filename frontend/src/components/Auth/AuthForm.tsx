import React from 'react';
import InputEmail from './Shared/InputEmail';
import InputPassword from './Shared/InputPassword';
import styled from 'styled-components';

const AuthForm = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [checkForm, setCheckForm] = React.useState(false);

  const emailHandler = (e: any) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e: any) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log('submit 실행');
  };

  React.useEffect(() => {
    if (email !== '' && password !== '') {
      setCheckForm(true);
    } else {
      setCheckForm(false);
    }
  }, [email, password]);

  return (
    <div>
      <AuthFormContainer onSubmit={submitHandler}>
        <input value={email} onChange={emailHandler} placeholder="이메일" />
        <input value={password} onChange={passwordHandler} placeholder="비밀번호" />
        <div>로그인 실패!</div>
        <button disabled={!checkForm}>SIGN IN</button>
      </AuthFormContainer>
    </div>
  );
};

export default AuthForm;

const AuthFormContainer = styled.form`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

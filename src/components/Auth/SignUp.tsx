import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import InputEmail from './Shared/InputEmail';
import InputPassword from './Shared/InputPassword';
import styled from 'styled-components';
import { signUp } from '../../store/auth';

const SignUp = ()=>{
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [checkForm, setCheckForm] = React.useState(false);
    const dispatch = useDispatch();

    const emailHandler = (e: any) => {
        setEmail(e.target.value);
      };
    
      const passwordHandler = (e: any) => {
        setPassword(e.target.value);
      };
    
    const submitHandler = (e: any) => {
        e.preventDefault();
        console.log("회원가입실행");
        dispatch(signUp({email, password}))
    };

    React.useEffect(()=>{
        if(email != '' && password != ''){
           setCheckForm(true);
        }else{
            setCheckForm(false);
        }
    }, [email, password])

    return (
        <div>
        <SignUpFormContainer onSubmit={submitHandler}>
            <input
             value={email}
             onChange={emailHandler}
             placeholder="이메일"
            />
            <input
              value={password}
              onChange={passwordHandler}
              placeholder="비밀번호"
            />
            <button disabled={checkForm}>SIGN UP</button>
        </SignUpFormContainer>

    </div>
    )
}
export default SignUp;

const SignUpFormContainer = styled.form`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
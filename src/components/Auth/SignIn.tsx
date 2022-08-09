import React from "react";
import InputEmail from "./Shared/InputEmail";
import InputPassword from "./Shared/InputPassword";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { signIn } from "../../store/auth";

const SignIn = () =>{
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
        console.log("로그인 실행")
        dispatch(signIn({email, password}))
    };

    React.useEffect(()=>{
        if(email == '' && password !== ''){
           setCheckForm(true);
        }else{
            setCheckForm(false);
        }
    }, [email, password])

    return(
        <div>
            <SignInFormContainer onSubmit={submitHandler}>
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
            </SignInFormContainer>
            <button disabled={checkForm}>SIGN IN</button>
        </div>
    )
}

export default SignIn;

const SignInFormContainer = styled.form`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
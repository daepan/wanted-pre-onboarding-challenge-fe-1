import React from "react";
import styled from "styled-components";

const Header = () =>{
 return (
    <HeaderContainer>
        헤더
    </HeaderContainer>
 )
}

export default Header;

const HeaderContainer = styled.div`
   width: 100vw;
   height: 50px;
   background-color: black;
   color: white;
`
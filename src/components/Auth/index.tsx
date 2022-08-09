import React from 'react';
import styled from 'styled-components';

const AuthTemplateBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 50px);
`;

const AuthTemplate = ({ children }: any) => {

    return (
      <AuthTemplateBlock>
          {children}
      </AuthTemplateBlock>
    );
};

export default AuthTemplate;
  
import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const SignIn: React.FunctionComponent = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />
      <form>
        <h1>Faça seu Logon</h1>
        <input placeholder="email" />
        <input placeholder="senha" type="password" />
        <button type="submit">Entrar</button>

        <a href="forgot">Esqueci minha senha</a>

        <a href="forgot">
          <FiLogIn />
          Criar conta
        </a>
      </form>
    </Content>
    <Background />
  </Container>
);

export default SignIn;

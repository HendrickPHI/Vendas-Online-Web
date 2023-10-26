import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../shered/components/buttons/button/Button';
import SVGLogo from '../../../shered/components/icons/SVGLogo';
import Input from '../../../shered/components/inputs/input/Input';
import { useRequests } from '../../../shered/hooks/useRequests';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  TitleLogin,
} from '../styles/loginScreen.style';

const LoginScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { authRequest, loading } = useRequests();

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    authRequest(navigate, {
      email: email,
      password: password,
    });
  };

  return (
    <ContainerLoginScreen>
      <ContainerLogin>
        <LimitedContainer>
          <SVGLogo />
          <TitleLogin level={2} type="secondary">
            LOGIN
          </TitleLogin>
          <Input title="USUÁRIO" margin="32px 0px 0px" onChange={handleEmail} value={email} />
          <Input
            type="password"
            title="SENHA"
            margin="32px 0px 0px"
            onChange={handlePassword}
            value={password}
          />
          <Button loading={loading} type="primary" margin="60px 0px 16px 0px" onClick={handleLogin}>
            ENTRAR
          </Button>

          <a href="/user">Esqueceu a senha?</a>

          <Button href="/user/insert" margin="40px 0px 16px 0px">
            Criar nova conta
          </Button>
        </LimitedContainer>
      </ContainerLogin>
      <BackgroundImage src="./background.png" />
    </ContainerLoginScreen>
  );
};

export default LoginScreen;

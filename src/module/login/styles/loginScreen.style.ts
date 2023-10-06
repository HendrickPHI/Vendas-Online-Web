import { Space, Typography } from 'antd';
import styled from 'styled-components';

const { Text, Title } = Typography;

export const ContainerLoginScreen = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`;

export const TitleLogin = styled(Title)`
  color: #006397;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
`;

export const LogoImage = styled.img`
  width: 202px;
`;

export const ContainerLogin = styled.div`
  display: flex;
  aling-items: center;
  justify-content: center;
  background-color: #06d2d2;
  padding: 24px;
  width: 100%;
  height: 90vh;
  max-width: 648px;
`;

export const LimitedContainer = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

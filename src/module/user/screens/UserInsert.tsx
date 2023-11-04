import Button from '../../../shered/components/buttons/button/Button';
import Input from '../../../shered/components/inputs/input/Input';
import Screen from '../../../shered/components/screen/Screen';
import {
  DisplayFlexJustifyCenter,
  DisplayFlexJustifyRight,
} from '../../../shered/components/styles/display.styled';
import { LimitedContainer } from '../../../shered/components/styles/limited.styled';
import { useUserInsert } from '../hooks/useUserInsert';
import { UserRoutesEnum } from '../routes';

const UserInsert = () => {
  const { user, disabledButton, handleCancelInsert, handleInsertUser, handleOnChangeInput } =
    useUserInsert();

  return (
    <Screen
      listBreadcrumb={[
        {
          name: 'HOME',
        },
        {
          name: 'USUÁRIOS',
          navigateTo: UserRoutesEnum.USER,
        },
        {
          name: 'INSERIR',
        },
      ]}
    >
      <DisplayFlexJustifyCenter>
        <LimitedContainer width={400}>
          <Input
            value={user.name}
            onChange={(event) => handleOnChangeInput(event, 'name')}
            margin="0px 0px 16px 0px"
            title="Nome"
            placeholder="Nome"
          />
          <Input
            value={user.phone}
            onChange={(event) => handleOnChangeInput(event, 'phone')}
            margin="0px 0px 16px 0px"
            title="Telefone"
            placeholder="Telefone"
          />
          <Input
            value={user.email}
            onChange={(event) => handleOnChangeInput(event, 'email')}
            margin="0px 0px 16px 0px"
            title="Email"
            placeholder="Email"
          />
          <Input
            value={user.cpf}
            onChange={(event) => handleOnChangeInput(event, 'cpf')}
            margin="0px 0px 16px 0px"
            title="CPF"
            placeholder="CPF"
          />
          <Input
            value={user.password}
            onChange={(event) => handleOnChangeInput(event, 'password')}
            margin="0px 0px 16px 0px"
            title="Senha"
            placeholder="Senha"
          />

          <DisplayFlexJustifyRight>
            <LimitedContainer margin="0px 8px" width={120}>
              <Button onClick={handleCancelInsert} danger>
                Cancelar
              </Button>
            </LimitedContainer>
            <LimitedContainer width={120}>
              <Button disabled={disabledButton} onClick={handleInsertUser} type="primary">
                Inserir Usuario
              </Button>
            </LimitedContainer>
          </DisplayFlexJustifyRight>
        </LimitedContainer>
      </DisplayFlexJustifyCenter>
    </Screen>
  );
};

export default UserInsert;

import { Input } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../shered/components/buttons/button/Button';
import Loading from '../../../shered/components/loading/Loading';
import Screen from '../../../shered/components/screen/Screen';
import {
  DisplayFlexJustifyBetween,
  DisplayFlexJustifyCenter,
} from '../../../shered/components/styles/display.styled';
import { LimitedContainer } from '../../../shered/components/styles/limited.styled';
import Table from '../../../shered/components/table/Table';
import { UserTypeEnum } from '../../../shered/enums/userType.enum';
import { getUserInfoByToken } from '../../../shered/functions/connection/auth';
import { insertMaskInCpf } from '../../../shered/functions/cpf';
import { insertMaskInPhone } from '../../../shered/functions/phone';
import { UserType } from '../../login/types/UserType';
import { useUser } from '../hooks/useUser';
import { UserRoutesEnum } from '../routes';

const { Search } = Input;

const columns: ColumnsType<UserType> = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Telefone',
    dataIndex: 'phone',
    key: 'phone',
    render: (text) => <a>{insertMaskInPhone(text)}</a>,
  },
  {
    title: 'CPF',
    dataIndex: 'cpf',
    key: 'cpf',
    render: (text) => <a>{insertMaskInCpf(text)}</a>,
  },
];

const User = () => {
  const { users, loading, handleOnChangeSearch } = useUser();
  const navigate = useNavigate();

  const userToken = useMemo(() => getUserInfoByToken(), []);

  const handleGoToInsertAdmin = () => {
    navigate(UserRoutesEnum.USER_INSERT);
  };

  return (
    <Screen
      listBreadcrumb={[
        {
          name: 'HOME',
        },
        {
          name: 'USUÁRIOS',
        },
      ]}
    >
      {loading ? (
        <DisplayFlexJustifyCenter>
          <Loading size="large" />
        </DisplayFlexJustifyCenter>
      ) : (
        <>
          <DisplayFlexJustifyBetween margin="0px 0px 16px 0px">
            <LimitedContainer width={240}>
              <Search placeholder="Buscar usuário" onSearch={handleOnChangeSearch} enterButton />
            </LimitedContainer>
            <LimitedContainer width={180}>
              {userToken?.typeUser === UserTypeEnum.Root && (
                <Button type="primary" onClick={handleGoToInsertAdmin}>
                  Inserir Admin
                </Button>
              )}
            </LimitedContainer>
          </DisplayFlexJustifyBetween>
          <Table columns={columns} dataSource={users} />
        </>
      )}
    </Screen>
  );
};

export default User;

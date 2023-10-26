import { useEffect, useState } from 'react';

import { URL_USER_ALL } from '../../../shered/constants/urls';
import { MethodsEnum } from '../../../shered/enums/methods.enum';
import { useRequests } from '../../../shered/hooks/useRequests';
import { useUserReducer } from '../../../store/reducers/userReducer/useUserReducer';

export const useUser = () => {
  const { users, setUsers } = useUserReducer();
  const [usersFiltered, setUsersFiltered] = useState(users);
  const { request, loading } = useRequests();

  useEffect(() => {
    request(URL_USER_ALL, MethodsEnum.GET, setUsers);
  }, []);

  useEffect(() => {
    setUsersFiltered(users);
  }, [users]);

  const handleOnChangeSearch = (value: string) => {
    if (!value) {
      setUsersFiltered([...users]);
    } else {
      setUsersFiltered([...users.filter((user) => user.name.includes(value))]);
    }
  };

  return {
    users: usersFiltered,
    loading,
    handleOnChangeSearch,
  };
};

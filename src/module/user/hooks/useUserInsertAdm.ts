import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_USER_ADM } from '../../../shered/constants/urls';
import { InsertUser } from '../../../shered/dtos/InsertUser.dto';
import { MethodsEnum } from '../../../shered/enums/methods.enum';
import { useRequests } from '../../../shered/hooks/useRequests';
import { UserRoutesEnum } from '../routes';

export const useUserInsertAdm = () => {
  const navigate = useNavigate();
  const { request, loading } = useRequests();
  const [disabledButton, setDisabledButton] = useState(true);
  const [userAdm, setUser] = useState<InsertUser>({
    cpf: '',
    email: '',
    name: '',
    password: '',
    phone: '',
  });

  useEffect(() => {
    if (userAdm.cpf && userAdm.email && userAdm.name && userAdm.password && userAdm.phone) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [userAdm]);

  const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
    setUser((currentUser) => ({
      ...currentUser,
      [name]: event.target.value,
    }));
  };

  const handleCancelInsert = () => {
    navigate(UserRoutesEnum.USER_ADM);
  };

  const handleInsertUserAdm = async () => {
    const result = await request(URL_USER_ADM, MethodsEnum.POST, undefined, userAdm);
    if (result) {
      navigate(UserRoutesEnum.USER_ADM);
    }
  };

  return {
    userAdm,
    disabledButton,
    loading,
    handleCancelInsert,
    handleInsertUserAdm,
    handleOnChangeInput,
  };
};

import { ColumnsType } from 'antd/es/table';
import { useNavigate } from 'react-router-dom';

import Screen from '../../../shered/components/screen/Screen';
import Table from '../../../shered/components/table/Table';
import { OrderType } from '../../../shered/types/OrderType';
import { useOrder } from '../hooks/useOrder';
import { OrderRoutesEnum } from '../routes';

const columns: ColumnsType<OrderType> = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Data',
    dataIndex: 'date',
    key: 'date',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Usuário',
    dataIndex: 'user',
    key: 'user',
    render: (_, target) => <a>{target.user?.name}</a>,
  },
  {
    title: 'Qtd. Produtos',
    dataIndex: 'amountProducts',
    key: 'amountProducts',
    render: (text) => <a>{text}</a>,
  },
];

const Order = () => {
  const { orders } = useOrder();
  const navigate = useNavigate();

  return (
    <Screen
      listBreadcrumb={[
        {
          name: 'HOME',
        },
        {
          name: 'PEDIDOS',
        },
      ]}
    >
      <Table
        onRow={(record) => ({
          onClick: () => navigate(`${OrderRoutesEnum.ORDER}/${record.id}`),
        })}
        columns={columns}
        dataSource={orders}
      />
    </Screen>
  );
};

export default Order;

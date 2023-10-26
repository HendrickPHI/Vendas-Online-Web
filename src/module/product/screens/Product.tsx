import { DeleteOutlined, EditOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Input, Modal } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useMemo } from 'react';

import Button from '../../../shered/components/buttons/button/Button';
import Screen from '../../../shered/components/screen/Screen';
import {
  DisplayFlex,
  DisplayFlexJustifyBetween,
} from '../../../shered/components/styles/display.styled';
import { LimitedContainer } from '../../../shered/components/styles/limited.styled';
import Table from '../../../shered/components/table/Table';
import { convertNumberToMoney } from '../../../shered/functions/money';
import { ProductType } from '../../../shered/types/ProductType';
import CategoryColumn from '../components/CategoryColumn';
import TooltipImage from '../components/TooltipImage';
import { useProduct } from '../hooks/useProduct';

const { Search } = Input;

const Product = () => {
  const {
    productsFiltered,
    openModalDelete,
    handleOnClickInsert,
    onSearch,
    handleDeleteProduct,
    handleEditProduct,
    handleCloseModalDelete,
    handleOpenModalDelete,
  } = useProduct();

  const columns: ColumnsType<ProductType> = useMemo(
    () => [
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
        render: (_, product) => <TooltipImage product={product} />,
      },
      {
        title: 'Nome',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => a.name.localeCompare(b.name),
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Categoria',
        dataIndex: 'category',
        key: 'category',
        render: (_, product) => <CategoryColumn category={product.category} />,
      },
      {
        title: 'Preço',
        dataIndex: 'price',
        key: 'price',
        render: (_, product) => <a>{convertNumberToMoney(product.price)}</a>,
      },
      {
        title: 'Comprar',
        dataIndex: 'cart',
        key: 'cart',
        render: () => (
          <DisplayFlex>
            <Button margin="0px 0px 0px 15px" icon={<PlusCircleOutlined />}></Button>
          </DisplayFlex>
        ),
      },
      {
        title: 'Ações',
        dataIndex: '',
        width: 240,
        key: 'x',
        render: (_, product) => (
          <LimitedContainer width={180}>
            <DisplayFlex>
              <Button
                margin="0px 16px 0px 0px"
                onClick={() => handleEditProduct(product.id)}
                icon={<EditOutlined />}
              ></Button>

              <Button
                danger
                onClick={() => handleOpenModalDelete(product.id)}
                icon={<DeleteOutlined />}
              ></Button>
            </DisplayFlex>
          </LimitedContainer>
        ),
      },
    ],
    [],
  );

  return (
    <Screen
      listBreadcrumb={[
        {
          name: 'HOME',
        },
        {
          name: 'PRODUTOS',
        },
      ]}
    >
      <Modal
        title="Atenção"
        open={openModalDelete}
        onOk={handleDeleteProduct}
        onCancel={handleCloseModalDelete}
        okText="Sim"
        cancelText="Cancelar"
      >
        <p>Tem certeza que deseja excluir esse produto?</p>
      </Modal>
      <DisplayFlexJustifyBetween margin="0px 0px 16px 0px">
        <LimitedContainer width={240}>
          <Search placeholder="Buscar produto" onSearch={onSearch} enterButton />
        </LimitedContainer>

        <LimitedContainer width={120}>
          <Button type="primary" onClick={handleOnClickInsert}>
            Inserir
          </Button>
        </LimitedContainer>
      </DisplayFlexJustifyBetween>
      <Table columns={columns} dataSource={productsFiltered} />
    </Screen>
  );
};

export default Product;

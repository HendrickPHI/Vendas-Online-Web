import { fireEvent, render } from '@testing-library/react';
import { JSX } from 'react/jsx-runtime';

import Breadcrumb, { ListBreadcrumb } from '../Breadcrumb';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

export const enum BreadcrumbTestEnum {
  CONTAINER = 'CONTAINER',
  ITEM = 'ITEM',
  CONTAINER_NAVIGATE = 'CONTAINER_NAVIGATE',
}

const mockListBreadcrumb: ListBreadcrumb[] = [
  {
    name: 'nameMock',
  },
];

const mockListBreadcrumbWithNavigate: ListBreadcrumb[] = [
  {
    name: 'nameMock',
    navigateTo: 'navigateTo',
  },
];

describe('test Breadcrumb', () => {
  it('should render success', () => {
    const { getByTestId } = render(<Breadcrumb listBreadcrumb={[]} />);

    expect(getByTestId(BreadcrumbTestEnum.CONTAINER)).toBeDefined();
  });

  it('should not render item if empty list', () => {
    const { queryAllByTestId } = render(<Breadcrumb listBreadcrumb={[]} />);

    expect(queryAllByTestId(BreadcrumbTestEnum.ITEM).length).toEqual(0);
  });

  it('should render item', () => {
    const { queryAllByTestId, getByText } = items(
      <Breadcrumb listBreadcrumb={mockListBreadcrumb} />,
    );

    expect(queryAllByTestId(BreadcrumbTestEnum.ITEM).length).toEqual(1);
    expect(queryAllByTestId(BreadcrumbTestEnum.CONTAINER_NAVIGATE).length).toEqual(0);
    expect(getByText(mockListBreadcrumb[0].name)).toBeDefined();
  });

  it('should render item with navigate', () => {
    const { queryAllByTestId } = items(
      <Breadcrumb listBreadcrumb={mockListBreadcrumbWithNavigate} />,
    );

    expect(queryAllByTestId(BreadcrumbTestEnum.CONTAINER_NAVIGATE).length).toEqual(1);
  });

  it.skip('should run navigate in click navigate', () => {
    const { getByTestId } = render(<Breadcrumb listBreadcrumb={mockListBreadcrumbWithNavigate} />);

    const buttonNavigate = getByTestId(BreadcrumbTestEnum.CONTAINER_NAVIGATE);

    fireEvent.click(buttonNavigate);

    expect(mockNavigate).toHaveBeenCalledWith(mockListBreadcrumbWithNavigate[0].navigateTo);
  });
});
function items(arg0: JSX.Element): { queryAllByTestId: any; getByText: any } {
  throw new Error('Function not implemented.');
}

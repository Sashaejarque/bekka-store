import { fireEvent, render } from '@testing-library/react';
import { expect, it, describe } from '@jest/globals';
import React from 'react';
import CategoriesLayout from '../Categories/CategoriesLayout';
import { ShoppingCartProvider } from '../../features/ShoppingCart/context/ShoppingCartProvider';

const onChange = jest.fn();

describe('Categories Layout', () => {
  it('should render the categories layout', () => {
    const component = render(
      <ShoppingCartProvider>
        <CategoriesLayout
          onChangeSearch={onChange}
          isLoading={false}
          data={mockData}
        />
      </ShoppingCartProvider>
    );
    expect(component).not.toBeNull();
  });

  it('should render the search input', () => {
    const component = render(
      <ShoppingCartProvider>
        <CategoriesLayout
          onChangeSearch={onChange}
          isLoading={false}
          data={mockData}
        />
      </ShoppingCartProvider>
    );
    const searchInput = component.getByTestId('search');
    expect(searchInput).not.toBeNull();
  });

  it('should call onChange function when search input changes', () => {
    const component = render(
      <ShoppingCartProvider>
        <CategoriesLayout
          onChangeSearch={onChange}
          isLoading={false}
          data={mockData}
        />
      </ShoppingCartProvider>
    );
    const input = document.getElementsByClassName(
      'MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart css-1o9s3wi-MuiInputBase-input-MuiOutlinedInput-input'
    );
    fireEvent.change(input[0], { target: { value: 'test' } });
    expect(onChange).toHaveBeenCalled();
  });

  it('Should show items filtered', () => {
    const component = render(
      <ShoppingCartProvider>
        <CategoriesLayout
          onChangeSearch={onChange}
          isLoading={false}
          data={simpleItem}
        />
      </ShoppingCartProvider>
    );
    const { getAllByText } = component;
    const input = document.getElementsByClassName(
      'MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart css-1o9s3wi-MuiInputBase-input-MuiOutlinedInput-input'
    );
    fireEvent.change(input[0], { target: { value: 'prueba' } });

    const items = getAllByText('prueba');
    expect(items.length).toBe(1);
  });
});

const mockData = [
  {
    id: 1,
    title: 'prueba',
    price: 500,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: 'test 2',
    price: 500,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
];

const simpleItem = [
  {
    id: 1,
    title: 'prueba',
    price: 500,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
];

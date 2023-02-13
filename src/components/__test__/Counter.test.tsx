import { render } from '@testing-library/react';
import { expect, it, describe } from '@jest/globals';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import Counter from '../Counter/Counter';

const onClickAdd = jest.fn();
const onClickRemove = jest.fn();

describe('Counter', () => {
  it('should render the counter', () => {
    const component = render(
      <Counter count={0} onClickAdd={() => {}} onClickRemove={() => {}} />
    );
    expect(component).not.toBeNull();
  });
  it('should render the 0 value', () => {
    const { getByText } = render(
      <Counter count={0} onClickAdd={() => {}} onClickRemove={() => {}} />
    );
    expect(getByText('0')).toBeTruthy();
  });
  it('The functions of add and remove is working', () => {
    const { getByTestId } = render(
      <Counter
        count={0}
        onClickAdd={onClickAdd}
        onClickRemove={onClickRemove}
      />
    );
    const addButton = getByTestId('add-button');
    const removeButton = getByTestId('decrease-button');
    addButton.click();
    expect(onClickAdd).toHaveBeenCalled();
    removeButton.click();
    expect(onClickRemove).toHaveBeenCalled();
  });
});

import { render } from '@testing-library/react';
import { expect, it, describe } from '@jest/globals';
import React from 'react';
import AccordionComponent from '../Acorddion/Accordion';

describe('Accordion', () => {
  it('should render Accordion component', () => {
    const component = render(
      <AccordionComponent title="testTitle">
        <h1>test</h1>
      </AccordionComponent>
    );
    expect(component).toBeTruthy();
    expect(component.getByTestId('accordion').tagName).toBe('DIV');
  });
  it('should render Accordion component with title', () => {
    const component = render(
      <AccordionComponent title="testTitle">
        <h1>test</h1>
      </AccordionComponent>
    );
    expect(component.getByText('testTitle')).toBeTruthy();
  });

  it('should render the child component', () => {
    const component = render(
      <AccordionComponent title="testTitle">
        <h1>test</h1>
      </AccordionComponent>
    );
    expect(component.getByText('test')).toBeTruthy();
    expect(component.getByText('test').tagName).toBe('H1');
  });
});

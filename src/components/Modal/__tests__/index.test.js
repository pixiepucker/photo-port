import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const currentPhoto = {
  name: 'Fries in Carton',
  category: 'food',
  description: 'Lorem ipsum',
  index: 1,
};

afterEach(cleanup);

describe('Modal component', () => {
  it('renders', () => {
    render(<Modal />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Modal />);

    expect(asFragment()).toMatchSnapshot();
  });
});

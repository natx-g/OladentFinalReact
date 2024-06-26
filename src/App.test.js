
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 

import App from './App'; 

test('renderiza correctamente las rutas', () => {

  const { getByText } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

 
  expect(getByText('Public')).toBeInTheDocument();
  expect(getByText('Home')).toBeInTheDocument();
  expect(getByText('Login')).toBeInTheDocument();

});

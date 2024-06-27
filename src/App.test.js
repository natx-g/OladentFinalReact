// app.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; // Importa userEvent para simular eventos de usuario
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders the App component', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  // Verifica que el componente Header esté presente
  const headerText = screen.getByText(/Bienvenido Oladent/i);
  expect(headerText).toBeInTheDocument();

  // Simula un clic en el enlace de inicio de sesión
  const loginLink = screen.getByRole('link', { name: /Iniciar sesión/i });
  userEvent.click(loginLink);

  // Verifica que la página de inicio de sesión se muestre
  const loginTitle = screen.getByText(/Iniciar sesión/i);
  expect(loginTitle).toBeInTheDocument();
});

/// <reference types="Jest" />

import inicializar from './index.js';
import './index.js';

jest.mock('../index.js', () => jest.fn());

test('inicializa pokedex', () => {
  expect(inicializar).toHaveBeenCalledTimes(1)
});

// test('revisar el paginador', () => {
//   expect(2 + 2).toBe(4);
// });
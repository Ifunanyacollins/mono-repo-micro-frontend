import * as React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Lend from 'lend/Module';
import Root from '../component/root/root';
import Recover from 'recover/Module';
import Save from 'save/Module';
import Bank from 'bank/Module';
import '../styles.css';
export const App = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <h1>Error not found</h1>,
    children: [
      {
        index: true,
        element: <h1>Home screen</h1>,
      },
      Lend,
      Bank,
      Save,
      Recover,
    ],
  },
]);

export default App;

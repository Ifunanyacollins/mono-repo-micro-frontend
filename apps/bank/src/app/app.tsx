import { Outlet } from 'react-router-dom';

export const App = {
  path: '/bank',
  element: (
    <div>
      <h1>hello from the bank team</h1>
      <Outlet />
    </div>
  ),
  children: [
    {
      path: '/bank/origination',
      element: <h2>Hello world from bank</h2>,
    },
  ],
};
export default App;

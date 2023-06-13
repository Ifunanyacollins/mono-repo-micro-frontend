import { Outlet } from 'react-router-dom';

export const App = {
  path: '/recover',
  element: (
    <div>
      <h1>hello from the recover team</h1>
      <Outlet />
    </div>
  ),
  children: [
    {
      path: '/recover/origination',
      element: <h2>Hello world from recover</h2>,
    },
  ],
};
export default App;

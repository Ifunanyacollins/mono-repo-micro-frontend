import { Outlet } from 'react-router-dom';

export const App = {
  path: '/save',
  element: (
    <div>
      <h1 className="text-red-400">hello from the save team</h1>
      <Outlet />
    </div>
  ),
  children: [
    {
      path: '/save/origination',
      element: <h2>Hello world from save</h2>,
    },
  ],
};
export default App;

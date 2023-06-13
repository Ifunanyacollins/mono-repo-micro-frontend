import { Outlet } from 'react-router-dom';
import Root from '../component/root/root';
import '../styles.css';
export const App = {
  path: '/lend',
  element: <Root />,
  children: [
    {
      index: true,
      element: <h1>Dashboard Page Team krank</h1>,
    },
    {
      path: '/lend/origination',
      element: <h2>Hello world from origination</h2>,
    },

    {
      path: '/lend/origination/:id',
      element: <h2>Hello world from single origination </h2>,
    },
  ],
};
export default App;

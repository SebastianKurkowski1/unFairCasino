import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Root from './Routes/root';
import ErrorPage from './Routes/error-page';
import About from './Routes/about';
import Contact from './Routes/contact';
import Slots from './Routes/slots';
import Fire from './Routes/Fire/Fire';
import Blackjack from './Routes/blackjack';
import { store } from './store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'slots',
        element: <Slots />,
      },
      {
        path: '/fire',
        element: <Fire />,
      },
      {
        path: 'blackjack',
        element: <Blackjack />,
      },
    ],
  },
]);
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);

import { createBrowserRouter, RouterProvider } from 'react-router';

import {
  HomeLayoutPage_xx,
  HomePage_xx,
  BlogStaticPage_xx,
  BlogLocalJsonPage_xx,
  BlogNodePage_xx,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayoutPage_xx />,
    children: [
      {
        index: true,
        element: <HomePage_xx />,
      },
      {
        path: 'static_xx',
        element: <BlogStaticPage_xx />,
      },
      {
        path: 'localjson_xx',
        element: <BlogLocalJsonPage_xx />,
      },
      {
        path: 'node_xx',
        element: <BlogNodePage_xx />,
      },
    ],
  },
]);

const App_xx = () => {
  return <RouterProvider router={router} />;
};

export default App_xx;

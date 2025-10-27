import { createBrowserRouter, RouterProvider } from 'react-router';

import {
  HomeLayoutPage_xx,
  HomePage_xx,
  BlogStaticPage_xx,
  BlogLocalJsonPage_xx,
  BlogNodePage_xx,
  BookListPage_xx,
  BlogSupaPage_xx,
} from './pages';

import {
  T11_ErrorExamplePage_xx,
  T12_UseStateBasicsPage_xx,
} from './pages/tutorials';

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
      {
        path: 'supa_xx',
        element: <BlogSupaPage_xx />,
      },
      {
        path: 'booklist_xx',
        element: <BookListPage_xx />,
      },
    ],
  },
  {
    path: '/tutorials',
    element: <HomeLayoutPage_xx />,
    children: [
      {
        index: true,
        element: <HomePage_xx />,
      },
      {
        path: 't11_xx',
        element: <T11_ErrorExamplePage_xx />,
      },
      {
        path: 't12_xx',
        element: <T12_UseStateBasicsPage_xx />,
      },
    ],
  },
]);

const App_xx = () => {
  return <RouterProvider router={router} />;
};

export default App_xx;

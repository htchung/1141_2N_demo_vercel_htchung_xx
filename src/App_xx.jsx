import { createBrowserRouter, RouterProvider } from 'react-router';

import {
  HomeLayoutPage_xx,
  HomePage_xx,
  BlogStaticPage_xx,
  BlogLocalJsonPage_xx,
  BlogLocalJsonPage2_xx,
  BlogNodePage_xx,
  BookListPage_xx,
  BlogSupaPage_xx,
} from './pages';

import {
  T11_ErrorExamplePage_xx,
  T12_UseStateBasicsPage_xx,
} from './pages/tutorials';

import {
  MidtermLayoutPage_xx,
  MidtermHomePage_xx,
  P1_StaticPage_xx,
  P2_StaticPage_xx,
  P3_NodePage_xx,
  P4_SupaPage_xx,
} from './pages/midterm';

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
        path: 'localjson2_xx',
        element: <BlogLocalJsonPage2_xx />,
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
  {
    path: '/midterm',
    element: <MidtermLayoutPage_xx />,
    children: [
      {
        index: true,
        element: <MidtermHomePage_xx />,
      },
      {
        path: 'p1_xx',
        element: <P1_StaticPage_xx />,
      },
      {
        path: 'womens_xx',
        element: <P1_StaticPage_xx />,
      },
      {
        path: 'p2_xx',
        element: <P2_StaticPage_xx />,
      },
      {
        path: 'p3_xx',
        element: <P3_NodePage_xx />,
      },
      {
        path: 'p4_xx',
        element: <P4_SupaPage_xx />,
      },
    ],
  },
]);

const App_xx = () => {
  return <RouterProvider router={router} />;
};

export default App_xx;

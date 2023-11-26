import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Dashboard from './pages/Dashboard';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
    },
    {
      path: '/dashboard',
      element: <Dashboard />,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

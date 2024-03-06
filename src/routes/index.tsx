import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import CreateUser from '../pages/CreateUser';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/users/create",
    element: <CreateUser />,
  },
]);

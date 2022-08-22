import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Blog from './pages/Blog';
import User from './pages/users/User';
import UserCreate from './pages/users/UserCreate';
import UserView from './pages/users/UserView';
import Customer from './pages/customers/Customer';
import CustomerCreate from './pages/customers/CreateCustomer';
import CustomerView from './pages/customers/ViewCustomer';
import Ticket from './pages/tickets/Ticket';
import TicketCreate from './pages/tickets/TicketCreate';
import TicketView from './pages/tickets/TicketView';
import Log from './pages/log/Log';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import Products from './pages/Products';
import DashboardApp from './pages/DashboardApp';
import HelpRequest from './pages/HelpRequest';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'user/create', element: <UserCreate/> },
        { path: 'user/view', element: <UserView/> },
        { path: 'customer', element: <Customer /> },
        { path: 'customer/create', element: <CustomerCreate /> },
        { path: 'customer/view', element: <CustomerView /> },
        { path: 'ticket', element: <Ticket /> },
        { path: 'ticket/create', element: <TicketCreate/>},
        { path: 'ticket/view', element: <TicketView/>},
        { path: 'log', element: <Log /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> },
      ],
    },
    {
      path: 'Helprequest',
      element: <HelpRequest />
    },
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'register',
      element: <Register />,
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
}

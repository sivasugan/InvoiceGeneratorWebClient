import React from 'react';
import './App.css';
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import CreateInvoiceForm from './components/CreateInvoiceForm';

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Login/>
    },
    {
      path:'dashboard',
      element: <Dashboard/>
    },
    {
      path:'createinvoiceform',
      element: <CreateInvoiceForm/>
    }
  ]
  )
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

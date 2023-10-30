import React from "react";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import NotificationContextProvider from "./context/NotificationContext";

function App() {
  return (
    <NotificationContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Orders />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </NotificationContextProvider>
  );
}

export default App;

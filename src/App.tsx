import React from "react";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import NotificationContextProvider from "./context/NotificationContext";

function App() {
  return (
    <NotificationContextProvider>
      <Orders />
    </NotificationContextProvider>
  );
}

export default App;

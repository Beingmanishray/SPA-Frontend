import React from "react";
import Dashboard from "./components/dashboard/Dashboard";
import List from "./components/list/List";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ListContextProvider from "./context/ListContextProvider";

const appRouter = [
  {
    index: true,
    element: <Dashboard />,
  },
  {
    path: "/list",
    element: <List />,
  },
];

const appRouterData = createBrowserRouter(appRouter);

function App() {
  return (
    <ListContextProvider>
      <RouterProvider router={appRouterData} />
    </ListContextProvider>
  );
}

export default App;

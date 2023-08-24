import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import HomePage from "./component/Home/HomePage";
import ErrorPage from "./component/Pages/ErrorPage";
import TestPage from "./component/TestPage/TestPage";
import Desktop9 from "./component/Pages/DeskTop9";

const router = createBrowserRouter([
  {
    path: "/",

    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "test-page", element: <TestPage /> },
      { path: "desktop9", element: <Desktop9 /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

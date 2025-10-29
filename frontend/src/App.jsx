import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Index from "./components/Home";
import RootLayout from "./components/RootLayout/RootLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Index />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.scss";
import ErrorPage from "./components/ErrorPage";
import { Layot } from "./components/Layot";
import { SearchAddressPage } from "./pages/SearchAddress";
import { NewsPage } from "./pages/NewsPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layot />}>
          <Route errorElement={<ErrorPage />}>
            <Route index element={<NewsPage />} />
            <Route path="address" element={<SearchAddressPage />} />
          </Route>
        </Route>
      </>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;

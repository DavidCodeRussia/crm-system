import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.scss";
import ErrorPage from "./components/universal/ErrorPage";
import { Layot } from "./components/universal/Layot";
import { NewsPage } from "./pages/NewsPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layot />}>
          <Route errorElement={<ErrorPage />}>
            <Route path="news" element={<NewsPage />} />
          </Route>
        </Route>
      </>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;

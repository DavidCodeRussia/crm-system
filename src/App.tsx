import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.scss";
import { Layot } from "./components/Layot";
import { SearchAddressPage } from "./pages/SearchAddress";
import { NewsPage } from "./pages/NewsPage";
import { ErrorPage } from "./components/ErrorPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layot />}>
          <Route index element={<NewsPage />} />
          <Route path="address" element={<SearchAddressPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;

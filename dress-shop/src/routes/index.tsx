import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// Constants
import { ROUTES } from "@/constants";
import { MAIN_ROUTES } from "./mainRouter";

// Layouts
import { MainLayout } from "@/layouts";
// import { ProductCart, ProductDetail, ProductSearch } from "@/pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={ROUTES.HOME} element={<MainLayout />}>
        {MAIN_ROUTES.map(({ path, Component }) => {
          console.log("Path ===", path);

          return (
            <Route key={path} path={path} id={path} element={<Component />} />
          );
        })}
      </Route>
    </Route>,
  ),
);

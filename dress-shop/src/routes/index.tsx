import { Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// Constants
import { ROUTES } from "@/constants";
import { MAIN_ROUTES } from "./mainRouter";

// Components
import { LoadingIndicator } from "@/components";

// Layouts
import { MainLayout } from "@/layouts";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={ROUTES.HOME} element={<MainLayout />}>
        {MAIN_ROUTES.map(({ path, Component }) => {
          return (
            <Route
              key={path}
              path={path}
              id={path}
              element={
                <Suspense fallback={<LoadingIndicator />}>
                  <Component />
                </Suspense>
              }
            />
          );
        })}
      </Route>
    </Route>,
  ),
);

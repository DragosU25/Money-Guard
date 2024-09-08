import React, { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SharedLayout from "./components/layouts/SharedLayout/SharedLayout";
import { refreshUser } from "./redux/auth/operationsAuth";
import NotFoundPage from "./pages/NotFoundPage";

import Loader from "./components/commonComponents/Loader/Loader";

import { useAuth } from "./hooks/useAuth";

import "./App.css";

const LazyLoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));

const DashboardPage = lazy(() => import("./pages/DashboardPage/DashboardPage"));

const HomeTabPage = lazy(() => import("./pages/HomeTab/HomeTab"));

const StatisticsTabPage = lazy(() =>
  import("./pages/StatisticsTab/StatisticsTab")
);

const LazyRegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);

function App() {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <React.Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/" component={<LazyLoginPage />} />
            }
          />

          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/"
                component={<LazyRegistrationPage />}
              />
            }
          />

          <Route
            path="/"
            element={
              <PrivateRoute redirectTo="/login" component={<DashboardPage />} />
            }>
            <Route path="" element={<HomeTabPage />} />

            <Route
              path="/home"
              element={
                <PrivateRoute redirectTo="/login" component={<HomeTabPage />} />
              }
            />

            <Route
              path="/statistics"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<StatisticsTabPage />}
                />
              }
            />
          </Route>

          <Route path="*" element={<NotFoundPage initPage="/" />} />
        </Route>

        {/* <Route
          index
          element={
            <RestrictedRoute
              redirectTo="/dashboard"
              component={<LoginPage />}
            />
          }
        /> */}
      </Routes>
    </React.Suspense>
  );
}

export default App;

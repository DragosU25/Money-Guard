import React, { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SharedLayout from "./components/layouts/SharedLayout/SharedLayout";
import { refreshUser } from "./services/operations";
import Loader from "./components/Loader/Loader";
import { selectAuth } from "./services/auth";

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(selectAuth);

  const DashboardPage = lazy(() =>
    import("./pages/DashboardPage/DashboardPage")
  );
  const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
  const RegistrationPage = lazy(() =>
    import("./pages/RegistrationPage/RegistrationPage")
  );

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <Loader />;
  }

  return (
    <React.Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <RestrictedRoute
                redirectTo="/dashboard"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/dashboard"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/dashboard"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute redirectTo="/login" component={<DashboardPage />} />
            }
          />
        </Route>
      </Routes>
    </React.Suspense>
  );
}

export default App;

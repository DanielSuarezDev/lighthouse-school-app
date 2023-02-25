import React, { lazy } from "react";
import { Route as RouteType, ROUTES } from "./types";
import { Routes, Route } from "react-router";
import { Navigate, BrowserRouter } from "react-router-dom";

const Home = lazy(
  () => import(/*webpackChunkName: "EditComunication"*/ "../Pages/Home")
);
const HomePlatform = lazy(
  () =>
    import(
      /*webpackChunkName: "EditComunication"*/ "../Pages/HomePlatform"
    )
);
const Login = lazy(
  () => import(/*webpackChunkName: "EditComunication"*/ "../Pages/Login")
);

export const RoutesPublic: RouteType[] = [
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
  {
    path: "*",
    element: <Navigate to={ROUTES.HOME} replace />,
  },
];

export const RoutesPrivate: RouteType[] = [
  {
    isPrivate: true,
    path: ROUTES.HOME_PLATFORM,
    element: <HomePlatform />,
    isLayout: false,
  },
  {
    path: "*",
    element: <Navigate to={ROUTES.HOME_PLATFORM} replace />,
  },
];

export enum StatusAuth {
  CHECKING = "checking",
  NOT_AUTHENTICATED = "not-authenticated",
  AUTHENTICATED = "authenticated",
}

export const Router = () => {
  const status = StatusAuth.AUTHENTICATED;

  console.log(status);
  console.log("status");

  return (
    <Routes>
      {status !== StatusAuth.AUTHENTICATED
        ? RoutesPrivate.map((route, index) => (
            <Route
              path={route.path}
              element={
                route.isLayout ? (
                  // <LayoutWrapper>{route.element}</LayoutWrapper>
                  <div>{route.element}</div>
                ) : (
                  route.element
                )
              }
              key={index}
            />
          ))
        : RoutesPublic.map((route, index) => (
            <Route path={route.path} element={route.element} key={index} />
          ))}
    </Routes>
  );
};

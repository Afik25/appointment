import MainLayout from "../MainLayout";
import PersistLogin from "../hooks/context/state/PersistLogin";
import RequireAuth from "../hooks/context/state/RequireAuth";
//
// pages
import Administration from "../pages/Administration";
//
// Layouts
import Dashboard from "../pages/layouts/Dashboard";
import Appointment from "../pages/layouts/Appointment";
import Personal from "../pages/layouts/Personal";
//
// Control
import NotFound from "../pages/404";
import Unauthorized from "../pages/Unauthorized";

const ROLES = {
  root: "root",
  admin: "admin",
  user: "user",
};

export const routes = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Administration />,
        children: [
          { path: "/", element: <Dashboard /> },
          { path: "appointments", element: <Appointment /> },
          { path: "personals", element: <Personal /> },
        ],
      },
      { path: "*", element: <NotFound /> },
      { path: "/unauthorized", element: <Unauthorized /> },
    ],
  },
];

import { lazy } from "react";
import AuthRoutes from "./AuthRoutes";

// const Dashboard = lazy(() => import("../views/dashboard/Dashboard"));

const auths = [].concat(AuthRoutes);

var ThemeRoutes = [
  {
    path: "/authentication",
    name: "Authentication",
    state: "openAuthentication",
    icon: "alert-triangle",
    badges: "side-badge badge badge-success",
    badgeno: "7",
    child: auths,
    collapse: true,
  },
];

export default ThemeRoutes;
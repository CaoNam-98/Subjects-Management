// eslint-disable-next-line import/no-cycle
import Taskboard from "../containers/Taskboard";
import AdminHomePage from "../containers/AdminHomePage";
import Login from "../containers/Login";
import Signin from "../containers/Signin";

export const API_URL = "http://localhost:3000";

export const STATUSES = [
  {
    value: 0,
    label: "READY",
  },
  {
    value: 1,
    label: "PROGRESS",
  },
  {
    value: 2,
    label: "COMPLETED",
  },
];

export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UPDATE: 202,
};

export const ADMIN_ROUTES = [
  {
    path: "/",
    name: "Trang quản trị",
    exact: true,
    component: AdminHomePage,
  },
  {
    path: "/task-board",
    name: "Quản lý công việc",
    exact: false,
    component: Taskboard,
  },
];

export const ROUTES = [
  {
    path: "/login",
    name: "Trang đăng nhập",
    exact: false,
    component: Login,
  },
  {
    path: "/signin",
    name: "Trang đăng ký",
    exact: false,
    component: Signin,
  },
];

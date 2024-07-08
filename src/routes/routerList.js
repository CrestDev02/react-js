import HomePage from "../components/home";
import Login from "../components/login";
import UserProfile from "../components/userProfile";

export const publicRoutes = [
  {
    path: "/",
    component: <HomePage />,
    title: "Home",
  },
  {
    path: "/login",
    component: <Login />,
    title: "Login",
    hideFromSitemap: true,
  },
];

export const loggedInUserRoutes = [
  {
    path: "/user-profile",
    component: <UserProfile />,
    title: "User Profile",
  },
];

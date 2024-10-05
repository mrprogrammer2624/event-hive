import { createBrowserRouter } from "react-router-dom";
import { AuthLayout, DashboardLayout, WebLayout } from "@/layouts";

/* */
import { ForgotPassword, Login, Otp, SignUp } from "@/pages/Authentication";
import { PasswordUpdateSuccess } from "@/components/Authentication/PasswordUpdate";
import { DashboardData } from "@/constants";
import { AddRecipe, Dashboard } from "@/pages/Admin";
import { Home } from "@/pages/Website";

/* */

const TaskPilotRoute = createBrowserRouter(
  /* All Paths */
  [
    {
      path: "/",
      children: [
        {
          element: <WebLayout />,
          children: [
            {
              index: true,
              element: <Home />,
            },
          ],
        },
        {
          path: "/admin",
          element: <DashboardLayout items={DashboardData} />,
          children: [
            {
              path: "dashboard",
              element: <Dashboard />,
            },
            {
              path: "recipe",
              element: <AddRecipe />,
            },
            {
              path: "add-recipe",
              element: <AddRecipe />,
            },
          ],
        },
        {
          /* Authentication Routes For Super Admin */
          element: <AuthLayout />,
          children: [
            {
              path: "login",
              element: <Login />,
            },
            {
              path: "signup",
              element: <SignUp />,
            },
            {
              path: "forgot-password",
              element: <ForgotPassword />,
            },
            {
              path: "otp",
              element: <Otp />,
            },
            {
              path: "passwordupdate",
              element: <PasswordUpdateSuccess />,
            },
          ],
        },
      ],
    },
    {
      /* Default Route (404) */
      path: "*",
      element: <>404 - Page Not Found</>,
    },
  ],
  {
    /* Base URL */
    basename: "/",
  }
);

export default TaskPilotRoute;

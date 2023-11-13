import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./layouts";
import { Dashboard } from "@/pages/dashboard";
import Provider from "./app/context/client/Provider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <>OOps! Page Not Found</>,
    children: [
      {
        path: "/dashboard",
        element: (
          <Provider>
            <Dashboard />
          </Provider>
        ),
      },
      {
        path: "/office-check-in",
        element: <>Office Check In</>,
      },
      {
        path: "/enquiries",
        element: (
          <>
            <>Enquiries</>
          </>
        ),
      },
      {
        path: "/clients",
        element: <>Clients</>,
      },
      {
        path: "/services",
        element: <>Services</>,
      },
      {
        path: "/quotation",
        element: <>Quotation</>,
      },
      {
        path: "/tasks",
        element: <>Tasks</>,
      },
    ],
  },
]);
export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

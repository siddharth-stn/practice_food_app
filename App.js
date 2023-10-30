import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./src/component/Header";
import Main from "./src/component/Main";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Main />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

/* ************************************************************************* */

// Import the main app component
import App from "./App";

// Import additional components for new routes
import BoardPage from "./pages/BoardPage";
import Crew from "./pages/Crew";
import EnemyDetails from "./pages/EnemyDetails";
import EnemyShips from "./pages/EnemyShips";
import Homepage from "./pages/Homepage";
import News from "./pages/News";
import Page404 from "./pages/Page404";
import Shop from "./pages/Shop";
import Weather from "./pages/Weather";

/* ************************************************************************* */

// Create router configuration with routes
const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <Page404 />,
    // loader: getPopularMovies,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/boardpage",
        element: <BoardPage />,
      },
      {
        path: "/crew",
        element: <Crew />,
      },
      {
        path: "/weather",
        element: <Weather />,
      },
      {
        path: "/enemyships",
        element: <EnemyShips />,
      },
      {
        path: "/enemyDetails/:nom",
        element: <EnemyDetails />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/news",
        element: <News />,
      },
    ],
  },
]);

/* ************************************************************************* */

// Find the root element in the HTML document
const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

// Render the app inside the root element
createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

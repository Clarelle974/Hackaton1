// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

/* ************************************************************************* */

// Import the main app component
import App from "./App";

// Import additional components for new routes
import Homepage from "./pages/Homepage";
import Page404 from "./pages/Page404";

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

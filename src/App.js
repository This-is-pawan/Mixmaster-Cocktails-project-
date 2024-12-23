import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  HomeLayout,
  Landing,
  Error,
  Cocktail,
  NewsLetter,
  SinglePageError
} from "./components/Pages/Index";
import { Loader as loadingLoader } from "./components/Pages/Landing";

const router = createBrowserRouter([
  {
    
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />, // This handles errors for the parent route
    children: [
      {
        index: true, // This makes the Landing page the default child route
        element: <Landing />,
        errorElement:<SinglePageError/>,
        loader: loadingLoader,
      },
      {
        path: "cocktail/:id",
        element: <Cocktail />,
      },
      {
        path: "newsletter",
        element: <NewsLetter />,
      },
      {
        path: "about",
        element: <About />,
        children: [
          {
            index: true,
            element: <h2>Our Company</h2>,
          },
          {
            path: "person",
            element: <h2>John Doe</h2>,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

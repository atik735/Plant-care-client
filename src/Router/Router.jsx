import {
  createBrowserRouter,
} from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import ErrorPage from "../Components/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllPlants from "../Pages/AllPlants";
import AddPlant from "../Pages/AddPlant";
import MyPlants from "../Pages/MyPlants";
import PrivateRoute from "../Contexts/PrivateRoute";
import Details from "../Components/Details";
import UpdatePlants from "../Components/UpdatePlants";

export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      errorElement:<ErrorPage></ErrorPage>,
      children:[{
        index:true,
        loader:() => fetch("http://localhost:3000/plants/new"),
        hydrateFallbackElement:(<span className="loading flex justify-center loading-spinner place-self-center loading-xl"></span>),
        Component:Home,
      },
      {
        path:"allplants",
         loader:() => fetch("http://localhost:3000/plants"),
        hydrateFallbackElement:(<span className="loading flex justify-center loading-spinner place-self-center loading-xl"></span>),
        Component:AllPlants
      },
      {
        path:"details/:id",

        loader:({params})=> fetch(`http://localhost:3000/plants/${params.id}`),

        hydrateFallbackElement:(<span className="loading flex justify-center loading-spinner place-self-center loading-xl"></span>),
        element:<PrivateRoute>
          <Details></Details>
        </PrivateRoute>
      },
      {
        path:"addplant",
        element:<PrivateRoute>
          <AddPlant></AddPlant>
        </PrivateRoute>
      },
      {
        path: "myplants/email/:email",
        loader:({params}) => fetch(`http://localhost:3000/plants/email/${params.email}`),
        hydrateFallbackElement:(<span className="loading flex justify-center loading-spinner place-self-center loading-xl"></span>),
        element:<PrivateRoute>
          <MyPlants></MyPlants>
        </PrivateRoute>
      },
      {
        path: "updatePlants/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/plants/${params.id}`),

        hydrateFallbackElement:(<span className="loading flex justify-center loading-spinner place-self-center loading-xl"></span>),
        Component: UpdatePlants,
      },
      {
      path:"/login",
      Component:Login
    },
    {
      path:"/register",
      Component:Register
    }
    ]
  },
]);

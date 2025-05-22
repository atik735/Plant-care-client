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

export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      errorElement:<ErrorPage></ErrorPage>,
      children:[{
        index:true,
        loader:() => fetch("http://localhost:3000/plants"),
        hydrateFallbackElement:(<span className="loading flex justify-center loading-spinner place-self-center loading-xl"></span>),
        Component:Home,
      },
      {
        path:"allplants",
        Component:AllPlants
      },
      {
        path:"addplant",
        element:<PrivateRoute>
          <AddPlant></AddPlant>
        </PrivateRoute>
      },
      {
        path:"myplants",
        element:<PrivateRoute>
          <MyPlants></MyPlants>
        </PrivateRoute>
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

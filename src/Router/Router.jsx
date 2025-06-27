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
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import TermsAndCon from "../Pages/TermsAndCon";
import AllPlantsCrd from "../Pages/AllPlantsCrd";
import DashboardLayout from "../Root/DashboardLayout";
import DasHome from "../Pages/DasHome";
import MyProfile from "../Pages/MyProfile";

export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      errorElement:<ErrorPage></ErrorPage>,
      children:[{
        index:true,
        loader:() => fetch("https://plant-care-server-three.vercel.app/plants/new"),
        hydrateFallbackElement:(<span className="loading flex justify-center loading-spinner place-self-center loading-xl"></span>),
        Component:Home,
      },
      {
        path:"allplants",
         loader:() => fetch("https://plant-care-server-three.vercel.app/plants"),
        hydrateFallbackElement:(<span className="loading flex justify-center loading-spinner place-self-center loading-xl"></span>),
        Component:AllPlantsCrd
      },
      {
        path:"aboutUs",
        Component: AboutUs
      },
      {
        path:"contactUs",
        Component: ContactUs
     },
      {
        path:"terms",
        Component: TermsAndCon
     },
      {
        path:"details/:id",

        loader:({params})=> fetch(`https://plant-care-server-three.vercel.app/plants/${params.id}`),

        hydrateFallbackElement:(<span className="loading flex justify-center loading-spinner place-self-center loading-xl"></span>),
        element:<PrivateRoute>
          <Details></Details>
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
    {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        index:true,
        Component: DasHome
      },
      {
        path:"/dashboard/allplants",
         loader:() => fetch("https://plant-care-server-three.vercel.app/plants"),
        hydrateFallbackElement:(<span className="loading flex justify-center loading-spinner place-self-center loading-xl"></span>),
        Component:AllPlants
      },
      {
        path: "/dashboard/myplants/email/:email",
        loader:({params}) => fetch(`https://plant-care-server-three.vercel.app/plants/email/${params.email}`),
        hydrateFallbackElement:(<span className="loading flex justify-center loading-spinner place-self-center loading-xl"></span>),
        element:<PrivateRoute>
          <MyPlants></MyPlants>
        </PrivateRoute>
      },
      {
        path:"/dashboard/addplant",
        element:<PrivateRoute>
          <AddPlant></AddPlant>
        </PrivateRoute>
      },
      {
        path:"/dashboard/myprofile",
        element:<PrivateRoute>
          <MyProfile></MyProfile>
        </PrivateRoute>
      },
      {
        path: "/dashboard/updatePlants/:id",
        loader: ({ params }) =>
          fetch(`https://plant-care-server-three.vercel.app/plants/${params.id}`),

        hydrateFallbackElement:(<span className="loading flex justify-center loading-spinner place-self-center loading-xl"></span>),
        Component: UpdatePlants,
      },
    ]
  }
]);

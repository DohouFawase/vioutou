import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/layout";
import Homepage from "../pages/homepage";

const root = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children:[
         {
            path:"",
            element:<Homepage />
         }
      ]

    }
])

export default root
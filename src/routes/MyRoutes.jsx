import {createBrowserRouter} from "react-router-dom"
import SignIn from "../signIn/SignIn"
// import LogIn from "../register/Register"
import Body from "../bodyLayout/body/Body"
import Register from "../register/Register"

export let MyRoutes = createBrowserRouter([
    {
        path:"/",
        element:<Body></Body>,
    },
            {
                path:"/homepage",
                element:<Body></Body>
            }
            ,
            {
                path:"/signin",
                element:<SignIn></SignIn>
                
            },
            {
                path:"/register",
                element:<Register></Register>
            }
        

        ]
)

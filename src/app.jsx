// import './app.css'
import { RouterProvider } from "react-router-dom"
import styles from "./app2.module.css"
import ASide from './bodyLayout/aside/ASide'
import Body from './bodyLayout/body/Body'
// import BodyLayout from './BodyLayout/BodyLayout'
import Footer from './footer/Footer'
import Header from './header/Header'
import { MyRoutes } from "./routes/MyRoutes"
// import { RouterProvider } from "react-router-dom"

export function App() {

  return (
    
      <div id={styles.appMain}>
        <Header id={styles.compHeader} />
        
        <RouterProvider router={MyRoutes}></RouterProvider>
        
      </div>
  )
}

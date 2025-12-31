import { Outlet } from "react-router-dom/dist"
import FavoriteList from "../components/FavoriteList";
import  Footer  from "../components/Footer"


// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    return (
        <>
            <FavoriteList />
                <Outlet />
            <Footer />
       </>
    )
}
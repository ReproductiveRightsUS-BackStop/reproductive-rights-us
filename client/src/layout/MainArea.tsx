import { Outlet } from "react-router-dom";
import AppRoutes from "../routes/AppRoutes";





export default function MainArea() {

    

    return (
        <div>
            <AppRoutes />
            <Outlet />
     
        </div>
    )
}



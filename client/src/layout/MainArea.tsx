import { Outlet } from "react-router-dom";
import AppRoutes from "../routes/AppRoutes";


export default function MainArea() {
    return (
        <div id="main-area">
            <AppRoutes />
            <Outlet />
        </div>
    )
}



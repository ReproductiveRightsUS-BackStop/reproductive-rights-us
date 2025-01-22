import { Routes, Route } from "react-router-dom";
import EmergencyCare from "../pages/EmergencyCare";
import Home from "../pages/Home";


export default function AppRoutes() {

    return (
        <Routes>
            <Route path="/"
                element={<Home />}
            />
            <Route path="/emergency-care"
                element={<EmergencyCare />}
            />
            
        </Routes>
    )
} 
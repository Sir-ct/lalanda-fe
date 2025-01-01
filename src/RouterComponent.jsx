import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import ListPage from "./pages/ListPage";

function RouterComponent(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" index element={<HomePage />} />
                <Route path="/register" element={<SignUp />} />
                <Route path="/listings" element={<ListPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterComponent
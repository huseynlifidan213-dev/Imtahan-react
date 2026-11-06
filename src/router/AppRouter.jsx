import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home"
import Layout from "../Layout/Layout"
import SonSection from "../components/SonSection"
import About from "../pages/About/About"

function AppRouter() {
    return (
        <div className="w-[100% ] h-screen">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home />} />
                        <Route path="/about" element={<About/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default AppRouter
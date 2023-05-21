import * as React from 'react'
import { Route, Routes, useNavigate } from "react-router-dom"

const Overview = React.lazy(()=>import("../Pages/Overview"))

const AllRoutes = () => {

    const navigate = useNavigate()

    const handleUnknownPages = () => {
        navigate("/overview")
    }

    return (
        <Routes>
            <Route path="/overview" element={<Overview/>} />
            <Route path="*" element={handleUnknownPages} />
        </Routes>
    )
}

export default AllRoutes;
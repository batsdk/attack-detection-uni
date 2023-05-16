import * as React from 'react'
import { Route, Routes } from "react-router-dom"

const Overview = React.lazy(()=>import("../Pages/Overview"))

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/overview" element={<Overview/>} />
        </Routes>
    )
}

export default AllRoutes;
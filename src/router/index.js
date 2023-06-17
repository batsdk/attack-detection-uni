import * as React from 'react'
import { Route, Routes, useNavigate } from "react-router-dom"

import Logs from '../Pages/Logs'
import Overview from '../Pages/Overview'
import Perfomance from '../Pages/Perfomance'

const AllRoutes = () => {

    const navigate = useNavigate()

    const handleUnknownPages = () => {
        navigate("/overview")
    }

    return (
        <Routes>
            <Route path="/" element={<Overview/>} />
            <Route path="/logs" element={<Logs/>} />
            <Route path="/perfomance" element={<Perfomance/>} />
            <Route path="*" element={<Overview/>} />
        </Routes>
    )
}

export default AllRoutes;
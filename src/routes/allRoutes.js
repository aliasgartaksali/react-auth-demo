import React from "react"
import { Redirect } from "react-router-dom"

// Pages Component
import Login from "../pages/login"
import Home from "../pages/home"

const userRoutes = [
    { path: "/home", component: Home },
    { path: "/", exact: true, component: () => <Redirect to="/home" /> },
]

const authRoutes = [
    { path: "/login", component: Login },
]

export { userRoutes, authRoutes }
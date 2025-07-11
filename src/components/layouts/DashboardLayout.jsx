
import React from "react"
import DashboardSidebar from "../shared/DashboardSidebar"
import { Outlet } from "react-router-dom"

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <DashboardSidebar />
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout

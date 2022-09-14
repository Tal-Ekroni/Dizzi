import { Outlet } from 'react-router-dom'
import { SideBar } from '../cmps/admin/side-bar/side-bar'

export const AdminDashboard = () => {
  return (
    <section className="admin-dashboard-container">
      <SideBar />
      <div className="main-dashboard-container">
        <Outlet />
      </div>
    </section>
  )
}

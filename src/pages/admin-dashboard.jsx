import { SideBar } from '../cmps/admin/side-bar/side-bar'

export const AdminDashboard = () => {
  return (
    <section className="admin-dashboard-container">
      <SideBar />
      <div className="data"></div>
    </section>
  )
}

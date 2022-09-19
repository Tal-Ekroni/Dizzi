import { Logo } from '../../logo'
import { MiniUser } from './mini-user'
import { NavList } from './nav-list'

export const SideBar = () => {
  return (
    <div className="side-bar-container">
      <Logo />
      <MiniUser />
      <NavList />
    </div>
  )
}

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { links } from '../../../consts/admin-nav-list'

export const NavList = () => {
  const [navList, setNavList] = useState(links)
  const navigate = useNavigate()

  const openInnerNav = (index) => {
    const currentNavList = navList
    currentNavList[index].isOpen = !currentNavList[index].isOpen
    setNavList([...currentNavList])
  }

  return (
    <div className="nav-list-container">
      <nav>
        <ul>
          {navList.map((link, index) => {
            if (link.links) {
              return (
                <div key={index}>
                  <li onClick={() => openInnerNav(index)}>{link.text}</li>
                  <div className={`inner-nav ${link.isOpen ? 'shown' : ''}`}>
                    {link.links.map((innerLink) => (
                      <li key={innerLink.link} onClick={() => navigate(`${innerLink.link}`)}>
                        {innerLink.text}
                      </li>
                    ))}
                  </div>
                </div>
              )
            } else {
              return (
                <li key={link.link} onClick={() => navigate(`${link.link}`)}>
                  {link.text}
                </li>
              )
            }
          })}
        </ul>
      </nav>
    </div>
  )
}

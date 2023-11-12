import React, { useId } from 'react'
import { NavLink } from 'react-router-dom'
import cx from 'classnames'

import headerCss from './header.module.css'

const Menu = ({
  display,
  open,
  handleClickBurgerMenu,
}: {
  display?: string
  open?: boolean
  handleClickBurgerMenu?: () => void
}): React.ReactElement => {
  interface ListNavProps {
    link: string
    name: string
    id: string
  }

  const listNav: ListNavProps[] = [
    {
      link: '/',
      name: 'Accueil',
      id: useId(),
    },
    {
      link: '/trollpicks',
      name: 'Trollpicks',
      id: useId(),
    },
    {
      link: '/guides',
      name: 'Guides',
      id: useId(),
    },
    {
      link: '/presentation',
      name: 'Présentation',
      id: useId(),
    },
    {
      link: '/me-soutenir',
      name: 'Me soutenir',
      id: useId(),
    },
    {
      link: '/me-contacter',
      name: 'Me contacter',
      id: useId(),
    },
  ]

  return (
    <div
      className={cx('text', {
        ['hidden right-0']: display === 'mobile',
        ['flex flex-col pr-2rem pt-4rem text-1.2rem transition-all duration-600']:
          open,
      })}
    >
      {listNav.map((item) => (
        <NavLink
          to={item.link}
          key={item.id}
          className={({ isActive }) =>
            cx({
              ['text-gold']: isActive,
              [headerCss.menuItem]: display === undefined,
            })
          }
          onClick={() => {
            if (handleClickBurgerMenu) {
              handleClickBurgerMenu()
            }
          }}
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  )
}

export default Menu

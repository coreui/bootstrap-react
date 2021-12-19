import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { myContext } from './../templates/Docs'

import { CButton, CCollapse } from '@coreui/bootstrap-react/src/index'

export type Badge = {
  color: string
  text: string
}

export type NavItem = {
  name: string | JSX.Element
  icon?: string | JSX.Element
  badge?: Badge
  to: string
  items?: NavItem[]
}

interface SidebarNavProps {
  items: NavItem[]
  currentRoute: string
  visible: boolean | undefined
}

export const SidebarNav = ({ items, currentRoute, visible }: SidebarNavProps) => {
  const navItem = (item: NavItem, index: number) => {
    const { name, ...rest } = item
    return (
      <li key={index}>
        <Link
          activeClassName="active"
          className="d-inline-flex align-items-center rounded"
          {...rest}
        >
          {name}
        </Link>
      </li>
    )
  }

  const navGroup = (item: NavItem, index: number) => {
    const { name, to } = item
    const [visible, setVisible] = useState(currentRoute?.startsWith(to))

    return (
      <li className="mb-1" key={index}>
        <CButton
          aria-current={visible}
          aria-expanded={visible}
          className="d-inline-flex align-items-center rounded"
          onClick={(event: any) => {
            event.preventDefault()
            setVisible(!visible)
          }}
        >
          {name}
        </CButton>
        <CCollapse visible={visible}>
          <ul className="list-unstyled fw-normal pb-1 small">
            {item.items?.map((item: NavItem, index: number) =>
              item.items ? navGroup(item, index) : navItem(item, index),
            )}
          </ul>
        </CCollapse>
      </li>
    )
  }

  return (
    <CCollapse
      className="brd-links"
      id="brd-docs-nav"
      aria-label="Docs navigation"
      visible={visible}
    >
      <ul className="list-unstyled mb-0 py-3 pt-md-1">
        {items &&
          items.map((item: NavItem, index: number) =>
            item.items ? navGroup(item, index) : navItem(item, index),
          )}
      </ul>
    </CCollapse>
  )
}

SidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  currentRoute: PropTypes.string.isRequired,
}

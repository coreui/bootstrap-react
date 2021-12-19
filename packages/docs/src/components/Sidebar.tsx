import React, { FC } from 'react'
import PropTypes from 'prop-types'

import { SidebarNav } from '.'

import { myContext } from './../templates/Docs'

import items from './../nav'
interface SidebarProps {
  currentRoute: string
}

const Sidebar: FC<SidebarProps> = ({ ...props }) => {
  return (
    <myContext.Consumer>
      {(context) => (
        <aside className="brd-sidebar">
          <SidebarNav
            items={items}
            currentRoute={props.currentRoute}
            visible={context.sidebarVisible}
          />
        </aside>
      )}
    </myContext.Consumer>
  )
}

Sidebar.propTypes = {
  currentRoute: PropTypes.string.isRequired,
}

Sidebar.displayName = 'Sidebar'

export default Sidebar

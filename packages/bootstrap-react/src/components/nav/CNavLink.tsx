import React, { ElementType, forwardRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { CLinkProps, CLink } from '../link/CLink'
export interface CNavLinkProps extends CLinkProps {
  /**
   * Toggle the active state for the component.
   */
  active?: boolean
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
  /**
   * Toggle the disabled state for the component.
   */
  disabled?: boolean
  /**
   * @ignore
   */
  to?: string
}

export const CNavLink = forwardRef<HTMLButtonElement | HTMLAnchorElement, CNavLinkProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('nav-link', className)

    return (
      <CLink className={_className} {...rest} ref={ref}>
        {children}
      </CLink>
    )
  },
)

CNavLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

CNavLink.displayName = 'CNavLink'

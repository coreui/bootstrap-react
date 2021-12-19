import React, { FC } from 'react'
import PropTypes from 'prop-types'

interface CalloutProps {
  className?: string
  color?: string
}

const Callout: FC<CalloutProps> = ({ children, className, color, ...rest }) => {
  return (
    <div
      className={`brd-callout brd-callout-${color}${className ? ` ${className}` : ''}`}
      {...rest}
    >
      {children}
    </div>
  )
}

Callout.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
}

Callout.displayName = 'Callout'

export default Callout

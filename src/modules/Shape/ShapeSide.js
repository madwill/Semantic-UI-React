import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import {
  getElementType,
  getUnhandledProps,
	customPropTypes,
  META,
} from '../../lib'

/**
 * A card can contain blocks of content or extra content meant to be formatted separately from the main content.
 */
function ShapeSide(props) {
  const {
    children,
    className,   
  } = props

  const classes = cx(
    className,  
    'content',
  )
  const rest = getUnhandledProps(ShapeSide, props)
  const ElementType = getElementType(ShapeSide, props)

  if (!_.isNil(children)) {
    return <ElementType {...rest} className={classes}>{children}</ElementType>
  }

  return (
    <ElementType {...rest} className={classes} />
  )
}

ShapeSide._meta = {
  name: 'ShapeSide',
  parent: 'Shape',
  type: META.TYPES.MODULE,
}

ShapeSide.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** The Shape text. */
  content: PropTypes.string,

  /** A card can contain extra content meant to be formatted separately from the main content. */
  centered: PropTypes.bool,

}

export default ShapeSide

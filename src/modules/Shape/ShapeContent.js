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
function ShapeContent(props) {
  const {
    children,
    className,   
  } = props

  const classes = cx(
    className,  
    'content',
  )
  const rest = getUnhandledProps(ShapeContent, props)
  const ElementType = getElementType(ShapeContent, props)

  if (!_.isNil(children)) {
    return <ElementType {...rest} className={classes}>{children}</ElementType>
  }

  return (
    <ElementType {...rest} className={classes} />
  )
}

ShapeContent._meta = {
  name: 'ShapeContent',
  parent: 'Shape',
  type: META.TYPES.MODULE,
}

ShapeContent.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** A shape can have its columns centered. */
  centered: PropTypes.bool,

}

export default ShapeContent

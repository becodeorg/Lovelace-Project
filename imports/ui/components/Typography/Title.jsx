import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

import typographyStyle from './typographyStyle'

function Title({ ...props }) {
  const { classes, children, centered, white } = props
  const titleClasses = classNames({
    [classes.defaultFontStyle]: true,
    [classes.title]: true,
    [classes.white]: white,
  })
  return <div className={titleClasses} style={ centered && { textAlign: 'center'}}>{children}</div>
}

Title.propTypes = {
  classes: PropTypes.object.isRequired,
  white: PropTypes.bool,
}

export default withStyles(typographyStyle)(Title)

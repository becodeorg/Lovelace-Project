import React from 'react'
import PropTypes from 'prop-types'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

import typographyStyle from './typographyStyle'

function SmallTitle({ ...props }) {
  const { classes, children, centered } = props
  return <div className={`${classes.defaultFontStyle} ${classes.smallTitleText}`} style={centered && {textAlign: 'center'}}>{children}</div>
}

SmallTitle.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(typographyStyle)(SmallTitle)

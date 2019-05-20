import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

import typographyStyle from './typographyStyle'

function Normal({ ...props }) {
  const { classes, children, centered, preWrap, white } = props
  const normalClasses = classNames({
    [classes.defaultFontStyle]: true,
    [classes.normalText]: true,
    [classes.white]: white,

  })
  return <div className={normalClasses} style={{ textAlign: centered ? 'center' : 'left', whiteSpace: preWrap ? 'pre-wrap' : 'normal', wordBreak: preWrap ? 'break-all' : 'normal'}}>{children}</div>
}

Normal.propTypes = {
  classes: PropTypes.object.isRequired,
  white: PropTypes.bool,
}

export default withStyles(typographyStyle)(Normal)

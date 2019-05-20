// ##############################
// // // Typography styles
// #############################

import {
  defaultFont,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  textColor,
  whiteColor,
} from '../../style/constant'

const typographyStyle = {
  defaultFontStyle: {
    ...defaultFont,
    color: 'rgba(0, 0, 0, 0.8)',
    fontFamily: 'Quicksand, Roboto, open sans, Arial',
    lineHeight: '25px',
  },
  defaultHeaderMargins: {
    marginTop: '20px',
    marginBottom: '10px',
  },
  title:{
    fontSize: '1.5rem',
    margin: '20px 0',
    fontWeight: 600,
  },
  quote: {
    padding: '10px 20px',
    margin: '0 0 20px',
    fontSize: '17.5px',
    borderLeft: '5px solid #eee',
  },
  quoteText: {
    margin: '0 0 10px',
    fontStyle: 'italic',
  },
  quoteAuthor: {
    display: 'block',
    fontSize: '80%',
    lineHeight: '1.42857143',
    color: '#777',
  },
  mutedText: {
    color: '#777',
  },
  primaryText: {
    color: primaryColor,
  },
  normalText: {
    fontSize: '1rem',
    color: textColor,
    lineHeight: 'normal',
  },
  smallTitleText: {
    color: '#464646',
    fontSize: '1.2rem',
    fontWeight: 500,
  },
  infoText: {
    color: infoColor,
  },
  successText: {
    color: successColor,
  },
  warningText: {
    color: warningColor,
  },
  dangerText: {
    color: dangerColor,
  },
  white: {
    color: whiteColor,
  },
}

export default typographyStyle

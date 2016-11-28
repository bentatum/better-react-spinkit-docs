
import React, { Component, PropTypes } from 'react'
import color from 'color'
import minifyCss from 'minify-css-string'
import withContext from 'recompose/withContext'

const baseColors = {
  blue: '#081017',
  lightBlue: '#F0F8FA',
  green: '#C2EBC2',
  black: '#060913',
  white: '#fff',
  lighterGray: '#f7f7f7',
  lightGray: '#eee',
  gray: '#999',
  darkGray: '#494949',
  red: '#BB453E'
}

export const colors = {
  ...baseColors,
  primary: baseColors.blue,
  secondary: baseColors.red,
  default: baseColors.darkGray,
  // info: baseColors.blue,
  // success: baseColors.green,
  // warning: baseColors.orange,
  error: baseColors.red
}

const scale = [0, 10, 20, 42, 64]
const fontSizes = [64, 30, 25, 18, 16, 14, 11]

export const shadows = [
  `0 6px 22px -3px ${color(colors.black).alpha(0.1).rgbString()}`
]

export const breakpoints = {
  small: 425,
  medium: 768,
  large: 1024
}

const fontWeightBase = 300

const css = `
  * { box-sizing: border-box; }

  html, body {
    background-color: ${colors.white};
    color: ${colors.blue};
    font-weight: 300;
    line-height: 1.5;
  }
  h1 { font-size: ${fontSizes[1]}px !important; }
  h2 { font-size: ${fontSizes[2]}px !important; }
  h3 { font-size: ${fontSizes[3]}px !important; }
  h4 { font-size: ${fontSizes[4]}px !important; }
  h5 { font-size: ${fontSizes[5]}px !important; }
  h6 { font-size: ${fontSizes[6]}px !important; }
  p  {
    font-size: ${fontSizes[4]}px;
    margin-top: 0;
    margin-bottom: ${scale[1]}px;
  }
  a {
    color: ${colors.primary};
    text-decoration: none;
  }
  input, select {
    background-color: ${colors.white} !important;
    color: ${colors.darkGray} !important;
  }
  ::-webkit-input-placeholder,
  :-moz-placeholder,
  ::-moz-placeholder,
  :-ms-input-placeholder {
    color: ${colors.darkGray};
    font-weight: ${fontWeightBase};
  }

  .Input.isInvalid .Text {
    margin-top: ${scale[1]}px !important;
  }
`

const enhance = withContext(
  {
    betterReactSpinkit: PropTypes.object,
    breakpoints: PropTypes.object,
    colors: PropTypes.object,
    reactIconBase: PropTypes.object,
    rebass: PropTypes.object,
    reflexbox: PropTypes.object,
    scale: PropTypes.array,
    shadows: PropTypes.array
  },
  () => ({
    betterReactSpinkit: {
      color: colors.primary,
      size: 50
    },
    breakpoints,
    colors,
    reactIconBase: {
      size: 24,
      color: colors.primary
    },
    reflexbox: { scale },
    rebass: {
      bold: 700,
      colors,
      fontSizes,
      scale,
      shadows,
      Block: {
        borderWidth: 1,
        marginBottom: scale[0],
        marginTop: scale[0]
      },
      Breadcrumbs: {
        marginBottom: 0
      },
      Heading: {
        color: colors.darkGray
      },
      Input: {
        color: colors.darkGray,
        width: '100%'
      },
      Menu: {
        borderWidth: 0
      },
      NavItem: {
        minHeight: scale[3],
        fontWeight: 300
      },
      Select: {
        color: colors.darkGray
      },
      Toolbar: {
        backgroundColor: 'transparent',
        paddingLeft: 0,
        paddingRight: 0
      }
    },
    scale,
    shadows
  })
)

export default enhance(props =>
  <div>
    <style>
      {minifyCss(css)}
    </style>
    {props.children}
  </div>
)

import { default as React, Component, PropTypes } from 'react'
import { default as color } from 'color'
import { default as css } from 'minify-css-string'

const baseColors = {
  green: '#a5c243',
  black: '#3a3a3a',
  white: '#fff',
  lighterGray: '#f7f7f7',
  lightGray: '#eee',
  gray: '#999',
  darkGray: '#494949',
  red: '#f52'
}

const colors = {
  ...baseColors,
  primary: baseColors.green,
  // secondary: baseColors.lightBlue,
  default: baseColors.darkGray,
  // info: baseColors.blue,
  // success: baseColors.green,
  // warning: baseColors.orange,
  error: baseColors.red
}

const scale = [0, 10, 20, 42, 64]
const fontSizes = [64, 30, 25, 18, 16, 14, 11]

const shadows = [
  `0 6px 22px -3px ${color(colors.black).alpha(0.1).rgbString()}`,
  `0px 0px 14px 3px ${color(colors.lightBlue).alpha(0.9).rgbString()}`
]

export const breakpoints = {
  small: 425,
  medium: 768,
  large: 1024
}

const fontWeightBase = 300

export default class Theme extends Component {

  static propTypes = {
    children: PropTypes.node
  };

  static childContextTypes = {
    betterReactSpinkit: PropTypes.object,
    breakpoints: PropTypes.object,
    colors: PropTypes.object,
    reactIconBase: PropTypes.object,
    rebass: PropTypes.object,
    reflexbox: PropTypes.object,
    scale: PropTypes.array,
    shadows: PropTypes.array
  };

  getChildContext () {
    return {
      betterReactSpinkit: {
        style: {
          color: colors.primary
        },
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
        Container: {
          paddingLeft: scale[1],
          paddingRight: scale[1]
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
          backgroundColor: colors.white,
          color: colors.black,
          minHeight: scale[3]
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
    }
  }

  render () {
    return (
      <div>
        <style>
          {css(`
            * { box-sizing: border-box; }

            html, body {
              background-color: ${colors.white};
              color: ${colors.black};
              font-weight: 300;
              line-height: 1.5;
            }
            h1 { font-size: ${fontSizes[1]}px; }
            h2 { font-size: ${fontSizes[2]}px; }
            h3 { font-size: ${fontSizes[3]}px; }
            h4 { font-size: ${fontSizes[4]}px; }
            h5 { font-size: ${fontSizes[5]}px; }
            h6 { font-size: ${fontSizes[6]}px; }
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
          `)}
        </style>
        {this.props.children}
      </div>
    )
  }
}

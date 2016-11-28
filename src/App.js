
import './style.scss'
import 'babel-polyfill'
import React from 'react'
import { Page, Theme } from '.'
import { breakpoints } from './Theme'
import MediaContext from 'react-media-context'

export default props =>
  <MediaContext
    queries={{
      xsmall: `screen and (max-width: ${breakpoints.small}px)`,
      small: `screen and (min-width: ${breakpoints.small}px)`,
      medium: `screen and (min-width: ${breakpoints.medium}px)`,
      large: `screen and (min-width: ${breakpoints.large}px)`
    }}>
    <Theme>
      <Page {...props} />
    </Theme>
  </MediaContext>

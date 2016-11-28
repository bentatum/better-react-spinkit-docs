
import React from 'react'
import { Flex } from 'reflexbox'
import { colors, shadows } from './Theme'
import GitHubLogo from 'react-icons/lib/go/mark-github'
import { Heading, Container, Toolbar, NavItem, Space } from 'rebass'
import getContext from 'recompose/getContext'

const enhance = getContext({
  media: React.PropTypes.array
})

export default enhance(props =>
  <Toolbar
    color='white'
    backgroundColor='primary'
    style={{
      boxShadow: shadows[0],
      minHeight: 'none'
    }}>
    <Container py={2} style={{ width: '100%' }}>
      <Flex
        flexColumn
        align='center'>
        <Heading
          color='white'
          level={1}>
          Better React Spinkit
        </Heading>
        <a target='_blank'
          href='https://github.com/bentatum/better-react-spinkit'>
          <GitHubLogo color={colors.secondary} />
        </a>
      </Flex>
    </Container>
  </Toolbar>
)

import { default as React, PropTypes } from 'react'
import { default as Headroom } from 'react-headroom'
import { Container, Toolbar, NavItem, Space } from 'prefixed-rebass'
import { default as GitHubLogo } from 'react-icons/lib/go/mark-github'
import { Flex } from 'prefixed-reflexbox'

const Navbar = (props, { colors, shadows }) =>
  <Toolbar is={Headroom} backgroundColor='primary' color='white' style={{ boxShadow: shadows[0], minHeight: 'none' }}>
    <Container style={{ width: '100%' }}>
      <Flex justify='space-between' align='center'>
        <NavItem pl={0}>
          Better React Spinkit
        </NavItem>
        <Space />
        <NavItem is='a' href='https://github.com/bentatum/better-react-spinkit' target='_blank'>
          <GitHubLogo color={colors.secondary} />
        </NavItem>
      </Flex>
    </Container>
  </Toolbar>

Navbar.contextTypes = {
  colors: PropTypes.object.isRequired,
  shadows: PropTypes.array.isRequired
}

export default Navbar

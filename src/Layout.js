import 'babel-polyfill'
import './style.scss'
import { default as React } from 'react'
import { Navbar, Theme } from '.'
import { Flex, Box } from 'prefixed-reflexbox'
import { Container } from 'prefixed-rebass'

const Layout = ({ title, components, toc }) =>
  <Theme>
    <Navbar />
    <Container pt={1} backgroundColor='white'>
      <Flex>
        <Box>
          {components}
        </Box>
        <Box pl={1}>
          {toc}
        </Box>
      </Flex>
    </Container>
  </Theme>

export default Layout

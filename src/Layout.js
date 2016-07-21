import 'babel-polyfill'
import { default as React } from 'react'
import { Theme } from '.'
import { Flex, Box } from 'prefixed-reflexbox'

const Layout = ({ title, components, toc }) =>
  <Theme>
    <Flex p={2}>
      <Box pr={2}>
        {toc}
      </Box>
      <Box>
        {components}
      </Box>
    </Flex>
  </Theme>

export default Layout

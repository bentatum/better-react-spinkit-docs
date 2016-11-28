
import React from 'react'
import { Flex, Box } from 'reflexbox'
import { Container } from 'rebass'
import getContext from 'recompose/getContext'
import { Navbar } from '.'

const enhance = getContext({
  media: React.PropTypes.array
})

export default enhance(props =>
  <div>
    <Navbar />
    <Container pt={1} backgroundColor='white'>
      <Flex>
        <Box>
          {props.components}
        </Box>
        {props.media.indexOf('large') > -1 &&
          <Box pl={1}>
            {props.toc}
          </Box>
        }
      </Flex>
    </Container>
  </div>
)

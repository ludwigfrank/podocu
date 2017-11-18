import styled from 'styled-components'
import React from 'react'

const StyledH3 = styled.h3`
  font-family: ${props => props.theme.typo.font.primary};
  font-weight: 400;
  color: ${props => props.theme.color.neutral[1]};
  font-size: 1.2em;
  line-height: 1em;
  display: block;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

const H3 = (props) =>
    <StyledH3 {...props}> {props.children} </StyledH3>

export default H3


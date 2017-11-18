import styled from 'styled-components'
import React from 'react'

const StyledH2 = styled.h2`
  font-family: ${props => props.theme.typo.font.primary};
  font-weight: 400;
  color: ${props => props.theme.color.neutral[2]};
  font-size: 1.5em;
  line-height: 1em;
  display: block;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

const H2 = (props) =>
    <StyledH2 {...props}> {props.children} </StyledH2>

export default H2


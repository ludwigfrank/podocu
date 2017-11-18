import styled from 'styled-components'
import React from 'react'

const StyledH1 = styled.h1`
  font-family: ${props => props.theme.typo.font.primary};
  font-weight: 300;
  letter-spacing: -1px;
  color: ${props => props.theme.color.neutral[2]};
  margin: 1em 0 1em 0;
  font-size: 2.5em;
  line-height: 1em;
  display: block;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

const H1 = (props) =>
    <StyledH1 {...props}> {props.children} </StyledH1>

export default H1

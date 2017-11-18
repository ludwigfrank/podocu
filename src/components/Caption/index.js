import styled from 'styled-components'
import PropTypes from 'prop-types'
import React from 'react'

const StyledCaption = styled.span`
  font-family: ${props => props.theme.typo.font.primary};
  font-weight: 400;
  color: ${props => props.theme.color.neutral[6]};
  font-size: 0.85em;
  line-height: 1.25em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  ${props => props.bold && 'font-weight: 600'};
  ${props => props.italic && 'font-style: italic'};
  ${props => props.inline && 'display: inline'};
  ${props => props.floatLeft && 'float: left'};
`

const Caption = (props) =>
    <StyledCaption {...props}> {props.children} </StyledCaption>

Caption.propTypes = {
    /** Bold style */
    bold: PropTypes.bool,
    /** Italic style */
    italic: PropTypes.bool,
    /** Inline css property */
    inline: PropTypes.bool
}

export default Caption

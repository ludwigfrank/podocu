import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

export const buttonStyles = css`
    color: ${props => props.active ? props.theme.color.neutral[1] : props.theme.color.neutral[5]};
    font-family: ${props => props.theme.typo.font.primary};
    font-weight: 600;
    font-size: 0.75em;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    white-space: nowrap;
    box-sizing: border-box;
    user-select: none;
    line-height: 40px;
    margin-top: 1px;
    display: block;
    background-color: rgba(0,0,0,0.0);
    :hover {
      opacity: 0.7;
    }
    transition: background-color, opacity 0.15s ease;
    ${props => props.tab && withTab};
    ${props => props.border &&  'padding: 0 1.5em'};
`

const withBorder = css`
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 0.25em;
    :hover {
        background-color: rgba(0,0,0,0.02);
    }
`

const withTab = css`
    margin: 0 1em;
    ${props => props.active && 'box-shadow: 0 2px #4080FF'};
`

const Anchor = styled.a`
    ${buttonStyles};
`

const IconAnchor = styled.a`
  ${buttonStyles};
  display: block;
  width: 40px;
  height: 40px;
  z-index: 10;
  cursor: pointer;
  background: url('/public/icons/${props => props.name}.svg') no-repeat center;
  ${props => props.border && withBorder};
  opacity: 0.7;
  transition: background-color, opacity 0.15s ease;
  :hover {
    opacity: 1;
  }
  :hover span{
    transform: translateX(50px);
    opacity: 1;
  }
`

const IconLabelWrapper = styled.span`
  padding-top: 2px;
  transform: translateX(40px);
  display: block;
  transition: all 0.35s ease;
  opacity: 0;
  pointer-events: none;
`

const Wrapper = styled.div`
  display: inline-block;
  ${props => props.border && withBorder};
`

const Button = (
    {
        href,
        onClick,
        handleRoute,
        active,
        name,
        border,
        tab,
        withLabel,
        icon
    }) => {

    let button = (
        <Anchor href={href} onClick={onClick} active={active} tab={tab} border={border}>
            {name}
        </Anchor>
    )

    if (handleRoute) {
        button = (
            <Anchor active={active}>
                {name}
            </Anchor>
        )
    }

    if (icon) {
        button = (
            <IconAnchor name={name} onClick={onClick} >
                {withLabel
                    ? <IconLabelWrapper>
                        {name}
                      </IconLabelWrapper>
                    : ''}
            </IconAnchor>
        )
    }

    return (
        <Wrapper active={active} border={border} tab={tab}>
            {button}
        </Wrapper>
    )
}

Button.propTypes = {
    /** Button label */
    name: PropTypes.string,
    /** Gets called when the user clicks on the button */
    onClick: PropTypes.func,
    /** If the button state is active */
    active: PropTypes.bool,
    /** If the border should be rendered */
    border: PropTypes.bool,
    /** Render a icon instead of text */
    icon: PropTypes.bool
}

Button.defaultProps = {
    name: 'Delete',
    onClick: () => { console.log('Button Clicked')},
    border: false,
    icon: false
}

export default Button
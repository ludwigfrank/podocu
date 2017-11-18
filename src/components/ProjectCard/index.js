import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Caption from '../Caption'
import H2 from '../H2'
import Button from '../Button'

const Wrapper = styled.div`
  width: 100%;
  height: 96px;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  position: relative;
  padding: 0 24px;
  justify-content: space-between;
  transition: all 0.3s ease;
  :hover {
    background: white;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.07);
  }
`

const BottomBorder = styled.div`
  height: 1px;
  width: calc(100% - 64px);
  position: absolute;
  bottom: 0;
  background-color: ${props => props.theme.color.neutral[8]};
`

const NameWrapper = styled.div`
  cursor: pointer;
  user-select: none;
`

const CaptionWrapper = styled.div`
  transform: translateY(-16px);
`

const IconWrapper = styled.div`
  float: right;
  margin-right: -8px;
  & > * {
    margin-left: 8px;
  }
`

const ProjectCard = ({
    handleClick,
    handleEdit,
    handleDelete,
    id
}) => {
    return (
        <Wrapper>
            <NameWrapper onClick={() => handleClick(id)}>
                <H2> Project Card </H2>
                <CaptionWrapper>
                    <Caption inLine> Last edited on </Caption>
                    <Caption bold inLine> 24 December </Caption>
                </CaptionWrapper>
            </NameWrapper>
            <IconWrapper>
                <Button onClick={() => handleDelete(id)} icon name={'Delete'} />
                <Button onClick={() => handleEdit(id)} icon name={'Edit'} />
            </IconWrapper>
        </Wrapper>
    )
}

ProjectCard.propTypes = {
    /** Project Id */
    id: PropTypes.string.isRequired,
    /** Gets called when the user clicks on the wrapper */
    handleClick: PropTypes.func,
    /** Gets called when the user clicks on the edit button */
    handleEdit: PropTypes.func,
    /** Gets called when the user clicks on the delete button */
    handleDelete: PropTypes.func
}

ProjectCard.defaultProps = {
    id: `${Math.random()}`,
    handleClick: (id) => { console.log('Project clicked' + id)},
    handleEdit: (id) => { console.log('Edit clicked' + id)},
    handleDelete: (id) => { console.log('Delete clicked' + id)}
}

export default ProjectCard

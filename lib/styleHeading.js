import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const pen = styled.div`
  width: 40px;
  height: 40px;
  background-color: red;
`


function HeadingRenderer({ level, children, ...props }) {
    const Tag = `h${level}`;

    return (
        <Tag {...props}>
            <pen />
            Hallo
        </Tag>
    );
}

HeadingRenderer.propTypes = {
    classes: PropTypes.object.isRequired,
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
    children: PropTypes.node,
}

export default HeadingRenderer
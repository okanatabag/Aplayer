import React from 'react'
import PropTypes from "prop-types";
import styled from 'styled-components'

export default function Image({src, alt}) {
  return (
    <StyledImg src={src} alt={alt} />
  )
}

const StyledImg = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  `;

  Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }

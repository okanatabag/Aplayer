import React from 'react'
import PropTypes from "prop-types";
import styled from 'styled-components'

export default function Video({src}) {
  return (
    <StyledVideo src={src} autoPlay muted />
  )
}

const StyledVideo = styled.video`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  `;

  Video.propTypes = {
    src: PropTypes.string.isRequired,
  }
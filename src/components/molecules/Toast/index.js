import React from 'react'
import PropTypes from 'prop-types'
import styled, {keyframes} from 'styled-components'

export default function Toast(props) {
  const { message, duration, type } = props;
  const messageArray = message.split('|');
  return (
    duration > 0 && (<StyledToastContainer><StyledToast type={type}>{messageArray.map((m)=>(<li key={m.length}>{m}</li>))}</StyledToast></StyledToastContainer>)
  )
}

const Showin = keyframes`
   0% {
    -webkit-transform: translateZ(-1400px);
            transform: translateZ(-1400px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    opacity: 1;
  }
`

const StyledToastContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;`;

const StyledToast = styled.div`
  position: absolute;
  bottom: 20px;
  color: #fff;
  width: 400px;
  padding: 30px;
  border-radius:10px;
  font-weight: 600;
  -webkit-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75);
  background-color: ${props => props.type === 'error' ? '#f44336' : '#4caf50'};
  -webkit-animation: ${Showin} 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: ${Showin} 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  `;


Toast.propTypes = {
  message: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
}



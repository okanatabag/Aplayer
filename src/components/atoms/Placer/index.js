import styled from "styled-components";

const Placer = styled.div`
  position: absolute;
  width: ${props => props.width}px;
  top: ${props => props.top || "0"}px;
  ${props => props.left && `left: ${props.left}px;`}
  ${props => props.right && `right: ${props.right}px;`}`;

export default Placer;

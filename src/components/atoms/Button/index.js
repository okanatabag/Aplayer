import styled from "styled-components";

const Button = styled.button`
  position: relative;
  background: ${props => props.bg || "#ddd"};
  color:  ${props => props.color || "#000"};
  font-weight: 700;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
  ${props => props.full && "width: 100%;"};
  padding: ${props => props.pd || "10px"};
  ${props => props.mt && `margin-top: ${props.mt}px;`};
  ${props => props.mb && `margin-bottom: ${props.mb}px;`};
`;

export default Button;
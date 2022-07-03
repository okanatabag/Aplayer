import styled from "styled-components";

const Label = styled.label`
  display: inline-block;
  font-weight: bold;
  margin-top: ${props => props.mt || "0"}px;`;

  export default Label;
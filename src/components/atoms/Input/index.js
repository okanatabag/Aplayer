
import styled from 'styled-components';

const Input = styled.input`
  border:3px solid #ccc;
  border-radius:5px;
  padding:8px;
  width: ${props => props.width || "100%"};
  &::placeholder {
    color: #ccc;
  }
  &:focus {
    border:3px solid #F00;
  }`;

export default Input;
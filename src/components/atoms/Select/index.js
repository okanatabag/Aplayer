import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function Select({items, name, onChange, value}) {
  const newitems=[{name:"Please Choose One", value:""},...items];
  return (
    <StyledSelect name={name} onChange={onChange} value={value}>
      {newitems.map(item => (<option key={item.value} value={item.value}>{item.name}</option>))}
    </StyledSelect>
  )
}

const StyledSelect = styled.select`
  border:3px solid #ccc;
  border-radius:5px;
  padding:8px;
  width: ${props => props.width || "100%"};
  cursor: pointer;
  &:focus {
    border:3px solid #F00;
  }`;

  Select.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })).isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }

  export default Select;


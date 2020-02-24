import styled from 'styled-components';

const BaseButton = `
  display: inline-block;
  color: #fff;
  font-size: 1rem;
  margin: 1rem;
  padding: 0.5rem 1rem;
  border: 2px solid #fff;
  border-radius: 3px;
  display: block;
  border: 0;
  cursor: pointer;
  margin: 0;
  display: inline-flex;
  outline: 0;
  position: relative;
  align-items: center;
  user-select: none;
  vertical-align: middle;
  -moz-appearance: none;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  background-color: #1976d2;
  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
`

const StyledButton = styled.button`
  ${BaseButton}
  width: 100%
`

const StyledInput = styled.input`
  ${BaseButton}
`

export {
  StyledButton,
  StyledInput
};
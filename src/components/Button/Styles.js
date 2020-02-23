import styled from 'styled-components';

const BaseButton = `
  display: inline-block;
  color: palevioletred;
  font-size: 1rem;
  margin: 1rem;
  padding: 0.25rem 1rem;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`

const StyledButton = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1rem;
  margin: 0;
  padding: 0.25rem 1rem;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
  width: 100%;
  outline: none;
`

const StyledInput = styled.input`
  display: inline-block;
  color: palevioletred;
  font-size: 1rem;
  margin: 1rem;
  padding: 0.25rem 1rem;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
  outline: none;
`

export {
  StyledButton,
  StyledInput
};
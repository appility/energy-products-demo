import styled from 'styled-components'
import Theme from './../../styles/Theme'

const Text = styled.p`
  margin: 8px auto;
`

const Error = styled(Text)`
  font-size: 1rem;
  color: red;
`

const StyledInput = styled.input`
  width: 100%;
  font-size: 1rem;
  padding: 0.5rem 0.8rem;
  border-width: 1px;
  border-style: solid;
  border-color: ${props =>
    props.error ? Theme.color['error'] : Theme.color['borderColor']};
  margin: 0;
  outline: none;
  &:focus {
    border-color: ${props =>
      props.error ? Theme.color['error'] : Theme.color['borderColor']};
  }
`

const Label = styled.label`
  display: inline-block;
  font-size: 1rem;
  font-weight: 400;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  margin: 0.5rem auto;
`

export { Text, Error, StyledInput, Label }

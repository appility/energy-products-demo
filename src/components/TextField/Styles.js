import styled from 'styled-components';
import Theme from './../../styles/Theme';

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
  border-color: ${props => props.error ? Theme.color['error'] : Theme.color['borderColor'] };
  margin: 0;
  &:focus {
    border-color: ${props => props.error ? Theme.color['error'] : Theme.color['borderColor']};
  }
`

const Label = styled.label`
  font-size: 1rem;
  margin: 8px auto;
`

export {
  Text,
  Error,
  StyledInput,
  Label
};
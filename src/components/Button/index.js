import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { StyledButton, StyledInput } from './Styles'

const Button = styled(({ id, value, onChange }) => {
  return (
    <StyledButton id={id} value={value} onClick={onChange}>
      {value}
    </StyledButton>
  )
})``

Button.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  renderAs: PropTypes.oneOf(['button', 'input', 'a'])
}

export { Button }

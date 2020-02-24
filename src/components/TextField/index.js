import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Text, Error, StyledInput, Label } from './Styles'

const TextField = styled(
  ({
    id,
    name,
    value,
    label,
    placeholder,
    hasError,
    isTouched,
    hintText,
    type,
    onChange,
    disabled,
    className
  }) => {
    const error = isTouched && hasError

    return (
      <div className={className}>
        {label && <Label htmlFor={name}>{label}</Label>}
        <StyledInput
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          error={error}
        />
        {hintText && <Text>{hintText}</Text>}
        {error && <Error>{error}</Error>}
      </div>
    )
  }
)``

TextField.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  hintText: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string
}

export { TextField }

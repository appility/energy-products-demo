import React, { Component } from 'react';
import styled from 'styled-components' 

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 20px;
  max-width: 100%;
  margin: 0 20px;
  @media (min-width: 1024px) {
    flex-wrap: nowrap;
    width: 960px;
    margin: 0 auto;
  }
`

function Base(props) {
  return <Container>{props.children}</Container>
}

export default Base


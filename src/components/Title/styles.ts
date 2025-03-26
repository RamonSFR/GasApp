import styled from 'styled-components'

export const Img = styled.img`
  width: 35%;

  @media screen and (max-width: 1024px) {
    width: 75%;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 64px 0px 32px 0;

  @media screen and (max-width: 1024px) {
    margin: 64px 0px 32px 0;
  }
`

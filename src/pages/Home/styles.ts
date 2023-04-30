import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 4.125rem;
  padding-right: 4.125rem;
  gap: 7rem;

  margin-top: 24px;

  @media (max-width: 600px) {
    padding: 16px;
  }
`

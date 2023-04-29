import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 63.5rem;
  padding-left: 4.125rem;
  padding-right: 4.125rem;
  gap: 7rem;

  margin-top: 24px;

  @media (max-width: 1250px) {
    flex-direction: column;
    gap: 2rem;
  }
`

import styled from 'styled-components'

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 24px 0px;
  gap: 24px;
  margin-bottom: 12px;

  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }

  img {
    max-width: 597px;
    min-height: 388px;
  }

  h1 {
    font-size: 1.75rem;
    font-weight: 500;
    margin-bottom: 7px;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 400;
  }
`

export const ProductAlign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 30px;

  @media (max-width: 1100px) {
    align-items: center;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 17px;
  }

  div > span {
    line-height: 120%;
    font-size: 2rem;
  }

  span:first-child {
    // descount price
    color: ${(props) => props.theme.price};

    ~ span {
      // normal price
      text-decoration: line-through;
    }
  }
`

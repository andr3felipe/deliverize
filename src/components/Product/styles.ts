import styled from 'styled-components'

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 24px 0px;
  width: 1148px;
  margin-bottom: 12px;

  @media (max-width: 1200px) and (min-width: 1050px) {
    width: 1100px;
  }

  img {
    max-width: 597px;
  }

  h1 {
    font-size: 1.75rem;
    font-weight: 500;
    margin-bottom: 7px;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 20px;
    max-width: 597px;
  }

  @media (max-width: 1150px) {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    max-width: 343px;

    h3 {
      text-align: center;
    }
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 1.2rem;
    }

    h3 {
      font-size: 1rem;
    }
  }
`

export const ProductAlign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 30px;

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

  @media (min-width: 600px) and (max-width: 1150px) {
    align-items: center;
  }

  @media (max-width: 950px) {
    img {
      width: 70vw;
    }
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 1.4rem;
    }

    h3 {
      font-size: 1.1rem;
    }
    > div > span {
      font-size: 1rem;
    }
    > div > span {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 600px) {
    align-items: flex-start;
    gap: 12px;
    text-align: start;

    h1 {
      font-size: 1.125rem;
    }

    img {
      margin: 0 auto;
      max-width: 60%;
    }

    h3 {
      text-align: start;
      max-width: 343px;
    }

    div > span {
      font-size: 0.875rem;
    }
  }
`

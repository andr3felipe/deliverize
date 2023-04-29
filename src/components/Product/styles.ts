import styled from 'styled-components'

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 24px 0px;
  gap: 24px;
  margin-bottom: 12px;

  max-width: 37.3125rem;

  img {
    max-width: 597px;
    min-height: 388px;
  }

  h1 {
    font-size: 1.75rem;
    font-weight: 500;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 400;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    span {
      line-height: 120%;
      font-size: 2rem;
    }

    span:first-child {
      color: ${(props) => props.theme.price};

      ~ span {
        text-decoration: line-through;
      }
    }
  }
`

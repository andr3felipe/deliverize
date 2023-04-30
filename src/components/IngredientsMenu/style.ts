import styled from 'styled-components'

export const IngredientsMenuContainer = styled.div`
  max-width: 23.5rem;
  padding: 32px;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid ${(props) => props.theme['product-border']};
  border-radius: 8px;

  @media (max-width: 600px) {
    border: none;
    font-size: 0.875rem;
    max-width: 343px;
    padding: 0;
  }
`

export const IngredientsHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  background-color: ${(props) => props.theme.yellow};
  width: 100%;
  padding: 16px 16px 8px 16px;
  margin-bottom: 16px;

  p {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 16px;
  }

  span {
    font-size: 0.75rem;
    color: ${(props) => props.theme['yelow-darker']};
  }

  @media (max-width: 600px) {
    max-width: calc(343px - 32px);
  }
`
export const IngredientsFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 21px;

  width: 25rem;

  div:has(p) {
    // talher container
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    height: 46px;
    padding: 8px 16px 16px 16px;
    max-width: 23.4375rem;
    width: 100%;
    font-size: 0.875rem;
    background-color: ${(props) => props.theme.yellow};
    flex: 1;

    input {
      height: 20px;
      width: 20px;
    }
  }

  @media (max-width: 600px) {
    max-width: 343px;
    div:has(p) {
      max-width: calc(343px - 32px);
    }
  }
`

export const AddButtonContainer = styled.div`
  display: flex;
  width: 100%;

  align-items: center;
  justify-content: space-between;

  div:first-of-type {
    // count button
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    width: 7.25rem;
    max-height: 14px;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.secondary};

    button {
      border: none;
      color: ${(props) => props.theme['button-red']};
      background-color: transparent;

      &:hover {
        cursor: pointer;
        transform: scale(1.2);
        transition: 0.2s ease-in-out;
      }

      &:disabled {
        cursor: not-allowed;
        color: ${(props) => props.theme['button-gray']};
      }
    }
  }

  div:last-of-type {
    button {
      cursor: pointer;
      border: none;
      border-radius: 4px;
      padding: 12px;
      width: 12.1875rem;
      color: white;
      font-weight: 500;
      font-size: 0.875rem;
      letter-spacing: 0.33px;
      background-color: ${(props) => props.theme.secondary};
    }
  }

  @media (max-width: 600px) {
    :nth-child(2) {
      max-width: 343px;
    }
  }
`

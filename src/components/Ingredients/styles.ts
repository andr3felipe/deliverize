import styled from 'styled-components'

export const IngredientsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 24rem;
  width: 100%;
  padding: 8px;

  margin-bottom: 8px;
  border-bottom: 1px solid #e8a634;

  div:first-child {
    //ingredient & price
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.5rem;

    span {
      color: ${(props) => props.theme.secondary};
    }
  }

  p {
    font-weight: 500;
    font-size: 0.875rem;
  }

  div:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    gap: 9px;
    width: 4.5625rem;
    height: 1rem;

    border: 1px solid ${(props) => props.theme.secondary};
    border-radius: 5px;

    button:first-of-type {
      //minus button align
      padding-top: 4px;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
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

    button:first-of-type {
      margin-top: -5px;
    }
  }

  @media (max-width: 600px) {
    max-width: calc(343px - 16px);
  }
`

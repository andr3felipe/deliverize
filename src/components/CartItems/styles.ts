import styled from 'styled-components'

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 600px) {
    font-size: 0.875rem;
  }
`

export const CartAlign = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  margin: 8px 3px;
  box-shadow: rgba(0, 0, 0, 0.15) 1px 1px 5px 3px;

  border-radius: 8px;
  background-color: white;
  padding: 12px 16px 18px 16px;

  border-radius: 30px;
`

export const CartHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;

  img {
    box-shadow: rgba(0, 0, 0, 0.15) 1px 5px 1px;
    border-radius: 30px;
    padding-top: 7px;
    margin-bottom: 4px;
  }
`
export const CartBody = styled.div`
  margin-left: 30px;

  p {
    margin-bottom: 4px;
    margin-left: -40px;
    font-weight: 500;
  }

  ul {
    padding-bottom: 6px;

    li {
      margin-bottom: 2px;
    }
  }
`
export const CartFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  strong {
    color: black;
  }

  p {
    color: ${(props) => props.theme.secondary};
  }
  button {
    margin-top: 6px;
    padding: 8px 12px;
    cursor: pointer;
    color: white;
    border: 0;

    border-radius: 4px;
    letter-spacing: 0.33px;

    background-color: ${(props) => props.theme['yelow-darker']};
    transition: 0.2s ease-in-out;
    font-weight: 500;

    &:hover {
      transform: scale(1.05);
    }
  }
`

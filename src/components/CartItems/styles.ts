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
  margin: 4px;
  padding: 16px;
  box-shadow: rgba(0, 0, 0, 0.15) 1px 1px 5px 3px;

  border-radius: 8px;
  background-color: white;
  padding: 8px 8px 14px 8px;

  border-radius: ${(props) =>
    props.variant === 'first' ? '30px 30px 0 0' : '30px'};
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
export const CartFooter = styled.div``

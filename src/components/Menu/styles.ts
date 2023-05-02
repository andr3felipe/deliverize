import styled from 'styled-components'

export const CartCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-left: 22px;
  margin-top: -4px;
  width: 13px;
  height: 13px;
  padding: 0;
  color: white;
  border-radius: 8px;
  background-color: ${(props) => props.theme.secondary};
  font-size: 0.625rem;
  letter-spacing: 0.2px;
`

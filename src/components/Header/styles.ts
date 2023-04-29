import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 1280px;
  max-height: 48px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  background-color: ${(props) => props.theme.background};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  padding: 16px 40px;
`

export const UserAddressContainer = styled.div`
  max-width: 14.375rem;
  width: 100%;
  max-height: 2rem;
  background-color: white;
  font-size: 0.75rem;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 8px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
  }

  //header (entrega)
  span:first-of-type {
    color: ${(props) => props.theme['button-red']};
    line-height: 208%;
    letter-spacing: 0.2px;
  }

  // header (endereço)
  span ~ span {
    font-weight: 700;
    color: ${(props) => props.theme['header-address']};
  }
`

export const ShipAddressArrow = styled.div`
  > button {
    cursor: pointer;
    border-right: 0;
    border-bottom: 0;
    height: 8px;
    width: 8px;
    border-top: 2px solid ${(props) => props.theme['button-red']};
    border-left: 2px solid ${(props) => props.theme['button-red']};
    transform: rotate(225deg);
    margin-right: 12px;
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex: 1;

  input {
    flex: 1;
    height: 3rem;
    border-radius: 4px;
    font-size: 0.875rem;
    padding-left: 1rem;
    padding-right: 1rem;
    color: ${(props) => props.theme['header-address']};

    border: 1px solid ${(props) => props.theme.primary};

    background-color: white;
  }
`
export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.125rem;

  a {
    color: ${(props) => props.theme.primary};
    text-decoration: none;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  span:first-of-type {
    position: relative;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-left: -39px;
    margin-top: -33px;
    width: 16px;
    height: 16px;
    padding: 0;
    color: white;
    border-radius: 8px;
    background-color: ${(props) => props.theme.secondary};
    font-size: 0.625rem;
    letter-spacing: 0.2px;
  }

  @media (max-width: 920px) {
    div {
      display: none;
    }
  }
`

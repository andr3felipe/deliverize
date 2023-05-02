import styled from 'styled-components'

export const PopoverContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  gap: 8px;
  top: 70px;
  right: 17px;
  background-color: ${(props) => props.theme['popover-background']};
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.15) 1px 1px 5px 3px;

  @media (min-width: 1290px) {
  }

  @media (max-width: 800px) {
    display: none;
  }

  &:after {
    content: '';
    position: relative;
    width: 17px;
    background-color: black;
    height: 15px;
    bottom: 168px;
    left: 106px;
    transform: rotate(45deg);
    background-color: ${(props) => props.theme['yelow-darker']};
  }

  div:first-child {
    background-color: ${(props) => props.theme['yelow-darker']};
    font-size: 1.125rem;
    color: white;
    padding: 9px 9px 5px 9px;
    border-radius: 4px 4px 0 0;
  }
`

export const CardHead = styled.div`
  color: ${(props) => props.theme['popover-title']};
  font-weight: 700;
  font-size: 0.875rem;
  padding: 0 11px 0 11px;
`

export const CardBody = styled.div`
  font-size: 0.75rem;
  padding: 0 11px 8px 11px;

  li {
    margin-left: 23px;
    padding-top: 2px;
  }
`
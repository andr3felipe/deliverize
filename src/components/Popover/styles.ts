import styled from 'styled-components'

type Popover = {
  variant: boolean
}

export const PopoverContainer = styled.div<Popover>`
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

  @media (min-width: 1280px) {
    margin-right: calc(100% / 2 - 653px);
  }

  @media (max-width: 800px) {
    display: none;
  }

  div:first-child {
    background-color: ${(props) => props.theme['yelow-darker']};
    font-size: 1.125rem;
    color: white;
    padding: 2px 9px 5px 9px;
    border-radius: 4px 4px 0 0;
  }

  display: ${(props) => (props.variant === true ? 'block' : 'none')};
`

export const CardHead = styled.div`
  color: ${(props) => props.theme['popover-title']};
  font-weight: 700;
  font-size: 0.875rem;
  padding: 0 11px 0 11px;

  margin-top: 6px;
  margin-bottom: 6px;
`

export const CardBody = styled.div`
  font-size: 0.75rem;
  padding: 0 11px 8px 11px;

  li {
    margin-left: 23px;
    padding-top: 2px;
  }

  :last-of-type p {
    font-weight: 500;
    margin-top: 6px;
  }
`
export const Signal = styled.div`
  &:after {
    content: '';
    position: absolute;
    width: 17px;
    height: 15px;
    margin-top: -11px;
    margin-left: 87px;
    transform: rotate(45deg);
    background-color: ${(props) => props.theme['yelow-darker']};
  }
`

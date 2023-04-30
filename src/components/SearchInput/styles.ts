import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex: 1;
  max-width: 354px;

  @media (max-width: 800px) {
    display: none;
  }

  input {
    flex: 1;
    height: 3rem;
    border-radius: 4px;
    font-size: 0.875rem;
    padding-left: 1rem;
    padding-right: 1rem;
    color: ${(props) => props.theme['header-address']};

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    border: 1px solid ${(props) => props.theme.primary};

    background-color: white;
  }
`

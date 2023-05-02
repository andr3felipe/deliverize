import styled from 'styled-components'

export type StyleTypes = {
  variant?: string
}

export const InputContainer = styled.div<StyleTypes>`
  display: flex;
  flex: 1;
  max-width: 354px;

  @media (max-width: 800px) {
    display: ${(props) => (props.variant === 'inputMobile' ? 'block' : 'none')};
    padding: ${(props) => (props.variant === 'inputMobile' ? '0px 4px' : null)};
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

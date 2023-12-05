import styled from 'styled-components';

export const CartWidgetContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  span {
    font-size: 1.25rem;
    font-family: ${(props) => props.theme.ffPrincipal};
    font-weight: 500;
  }

  &:hover {
    transition: color 0.5s;
    color: ${(props) => props.theme.light};
  }
`;

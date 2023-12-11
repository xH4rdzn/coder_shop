import styled from 'styled-components';

export const ItemCountContainer = styled.div`
  display: flex;
  max-width: 12rem;
  padding: 1.5rem;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.elements};
  border-radius: 8px;
  margin-bottom: 1rem;

  button {
    border: 0;
    background-color: ${(props) => props.theme.elements};
    color: ${(props) => props.theme.principal};
  }

  span {
    font-family: ${(props) => props.theme.ffPrincipal};
    color: ${(props) => props.theme.title};
    font-size: 1.5rem;
    font-weight: 500;
    border: 0;
  }
`;

export const BtnAddCart = styled.button`
  border: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${(props) => props.theme.ffPrincipal};
  color: ${(props) => props.theme.title};
  font-size: 1rem;
  font-weight: 500;
  padding: 1.55rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme.principal};
  cursor: pointer;
  transition: background-color 0.5s;
  text-transform: uppercase;

  &:hover {
    background-color: ${(props) => props.theme.light};
  }
`;

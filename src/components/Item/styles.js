import styled from "styled-components";

export const ItemContainer = styled.div`
  max-width: 18.75rem;
  max-height: 25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2.625rem;

  img {
    border-radius: 0.75rem;
  }

  span {
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 1;
    left: 1.5rem;
    top: 5rem;
    width: 4rem;
    background-color: ${props => props.theme.principal};
    padding: 1rem;
    border-radius: 8px;
    font-family: ${props => props.theme.ffPrincipal};
    font-size: 1rem;
    font-weight: bold;
  }

  button {
    padding: 0.75rem;
    border-radius: 8px;
    background-color: ${props => props.theme.principal};
    border: 0;
    color: ${props => props.theme.title};
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.5ms;


    &:hover {
      background-color: ${props => props.theme.light};
    }
  }
`;
import styled from 'styled-components';

export const ItemContainer = styled.div`
  width: 18.75rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 8rem;

  img {
    border-radius: 0.75rem;
    max-width: 300px;
    max-height: 375px;
  }

  span:first-child {
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 1;
    left: 1.5rem;
    top: 5rem;
    max-width: 6rem;
    background-color: ${(props) => props.theme.principal};
    padding: 1rem;
    border-radius: 8px;
    font-family: ${(props) => props.theme.ffPrincipal};
    font-size: 1rem;
    font-weight: bold;
    color: ${(props) => props.theme.title};
  }

  h3 {
    font-size: 1.5rem;
    font-family: ${(props) => props.theme.ffPrincipal};
    font-weight: 500;
    color: ${(props) => props.theme.title};
  }

  h4 {
    font-weight: bold;
    color: ${(props) => props.theme.white};
  }

  button {
    padding: 0.75rem;
    border-radius: 8px;
    background-color: ${(props) => props.theme.principal};
    border: 0;
    color: ${(props) => props.theme.title};
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.5ms;

    &:hover {
      background-color: ${(props) => props.theme.light};
    }
  }
`;

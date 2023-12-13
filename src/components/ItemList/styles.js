import styled from 'styled-components';

export const ItemListContainer = styled.div`
  margin-bottom: 7rem;
  max-width: 73rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.5rem;
`;

export const TitleSection = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-transform: uppercase;

  &::after {
    content: '';
    width: 6.25rem;
    height: 3px;
    background-color: ${(props) => props.theme.light};
    border-radius: 9999px;
  }
`;

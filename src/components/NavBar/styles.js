import styled from 'styled-components';

export const HeaderContainer = styled.header`
  margin: 2.5rem auto 1.5rem;
  max-width: 73rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 3rem;

  a {
    color: ${(props) => props.theme.title};

    &:hover {
      transition: color 0.5s;
      color: ${(props) => props.theme.light};
    }
  }
`;

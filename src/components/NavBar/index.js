import { HeaderContainer, NavContainer } from './styles';
import logoHeader from '../../assets/LogoHeader.png';
import {
  At,
  GameController,
  House,
  ShoppingCart,
  Usb,
} from '@phosphor-icons/react';

export function NavBar() {
  return (
    <HeaderContainer>
      <img src={logoHeader} alt="" />
      <NavContainer>
        <a href="/">
          <House size={32} />
        </a>

        <a href="/">
          <Usb size={32} />
        </a>

        <a href="/">
          <GameController size={32} />
        </a>

        <a href="/">
          <At size={32} />
        </a>

        <a href="/">
          <ShoppingCart size={32} />
        </a>
      </NavContainer>
    </HeaderContainer>
  );
}

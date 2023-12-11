import { HeaderContainer, NavContainer } from './styles';
import logoHeader from '../../assets/LogoHeader.png';
import { At, GameController, House, Usb } from '@phosphor-icons/react';
import { CartWidget } from '../CartWidget';

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

        <CartWidget count={5} />
      </NavContainer>
    </HeaderContainer>
  );
}

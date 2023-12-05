import { ShoppingCart } from '@phosphor-icons/react';
import { CartWidgetContainer } from './styles';

export function CartWidget() {
  return (
    <CartWidgetContainer>
      <ShoppingCart size={32} />
      <span>4</span>
    </CartWidgetContainer>
  );
}

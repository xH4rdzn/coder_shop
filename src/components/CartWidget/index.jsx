import { ShoppingCart } from '@phosphor-icons/react';
import { CartWidgetContainer } from './styles';

export function CartWidget({ count }) {
  return (
    <CartWidgetContainer>
      <ShoppingCart size={32} />
      <span>{count}</span>
    </CartWidgetContainer>
  );
}

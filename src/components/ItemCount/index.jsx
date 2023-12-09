import { useState } from 'react';
import { BtnAddCart, ItemCountContainer } from './styles';
import { Minus, ShoppingBag, Plus } from '@phosphor-icons/react';

export function ItemCount({ stock, initial }) {
  const [count, setCount] = useState(initial);

  function handleIncrement() {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  function handleDecrement() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  function handleAddToCart(count) {}

  return (
    <>
      <ItemCountContainer>
        <button onClick={handleDecrement}>
          <Minus size={24} />
        </button>
        <span>{count}</span>
        <button onClick={handleIncrement}>
          <Plus size={24} />
        </button>
      </ItemCountContainer>
      <BtnAddCart onClick={() => handleAddToCart(count)}>
        Adicionar ao carrinho
        <ShoppingBag size={20} />
      </BtnAddCart>
    </>
  );
}

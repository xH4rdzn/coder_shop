import { ItemCount } from '../ItemCount';

export function ItemListContainer() {
  return (
    <>
      <h1>Aqui vai o conteúdo do site.</h1>
      <ItemCount stock={10} initial={1} />
    </>
  );
}

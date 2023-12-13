import { ItemContainer } from './styles';

export function Item({ pictureUrl, tag, title, price }) {
  return (
    <>
      <ItemContainer>
        <span>{tag}</span>
        <img src={pictureUrl} alt={title} />
        <h3>{title}</h3>
        <h4>{price}</h4>
        <button>Ver Detalhes</button>
      </ItemContainer>
    </>
  );
}

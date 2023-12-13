import { ItemListContainer, TitleSection } from './styles';
import { Item } from './../Item/index';

const games = [
  {
    id: 1,
    tag: 'PC',
    pictureUrl:
      'https://upload.wikimedia.org/wikipedia/pt/0/06/TW3_Wild_Hunt.png',
    title: 'The Withcer 3 - Wild Hunt',
    price: 'R$ 190',
  },
  {
    id: 2,
    tag: 'PS4',
    pictureUrl:
      'https://image.api.playstation.com/vulcan/img/rnd/202010/2618/Y02ljdBodKFBiziorYgqftLE.png',
    title: 'The Last of Us Part II',
    price: 'R$ 250',
  },
  {
    id: 3,
    tag: 'XBOX',
    pictureUrl:
      'https://pbs.twimg.com/media/D8VrFqWVUAAUavD?format=jpg&name=4096x4096',
    title: 'Gears 5',
    price: 'R$ 200',
  },
  {
    id: 4,
    tag: 'PC',
    pictureUrl:
      'https://static.gamesmen.com.au/media/catalog/product/cache/43c1b9e48526c06c9c8010675100b71d/c/y/cyber_punk_2077_pc_cover_final_2.jpg',
    title: 'Cyberpunk 2077',
    price: 'R$ 199',
  },
  {
    id: 5,
    tag: 'PS4',
    pictureUrl: 'https://www.kadri.com.br/imgsite/produtos/amp-30563_1.jpg',
    title: 'Horizon Zero Dawn',
    price: 'R$ 150',
  },
  {
    id: 6,
    tag: 'XBOX',
    pictureUrl:
      'https://upload.wikimedia.org/wikipedia/pt/thumb/d/dc/Capa_de_Forza_Horizon_5.jpg/270px-Capa_de_Forza_Horizon_5.jpg',
    title: 'Forza Horizon 5',
    price: 'R$ 210',
  },
];

const promiseGames = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(games);
  }, 2000);
});

const perefiricos = [
  {
    id: 1,
    tag: 'MOUSE',
    pictureUrl:
      'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/1/3/13277856_xxlg.jpg',
    title: 'Razer DeathAdder Elite',
    price: 'R$ 550',
  },
  {
    id: 2,
    tag: 'TECLADO',
    pictureUrl:
      'https://images.kabum.com.br/produtos/fotos/355925/teclado-mecanico-gamer-corsair-k70-rgb-pro-switch-cherry-mx-red-abnt2-ch-9109410-br_1661451747_gg.jpg',
    title: 'Corsair K70 RGB',
    price: 'R$ 900',
  },
  {
    id: 3,
    tag: 'MOUSE',
    pictureUrl: 'https://img.kalunga.com.br/fotosdeprodutos/436470z_7.jpg',
    title: 'Logitech G PRO X Superlight',
    price: 'R$ 700',
  },
  {
    id: 4,
    tag: 'HEADSET',
    pictureUrl:
      'https://images.kabum.com.br/produtos/fotos/92357/92357_index_gg.jpg',
    title: ' HyperX Cloud Alpha',
    price: 'R$ 450',
  },
  {
    id: 5,
    tag: 'MONITOR',
    pictureUrl:
      'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/p/g/pg279q3.jpg',
    title: 'ASUS ROG Swift PG279Q',
    price: 'R$ 2450',
  },
  {
    id: 6,
    tag: 'WEBCAM',
    pictureUrl:
      'https://m.media-amazon.com/images/I/71iNwni9TsL._AC_UF894,1000_QL80_.jpg',
    title: 'Logitech C920',
    price: 'R$ 470',
  },
];

export function ItemList() {
  return (
    <>
      <TitleSection>Games</TitleSection>
      <ItemListContainer>
        {games.map((posts) => (
          <Item
            key={posts.id}
            tag={posts.tag}
            pictureUrl={posts.pictureUrl}
            price={posts.price}
            title={posts.title}
          />
        ))}
      </ItemListContainer>

      <TitleSection>Periféricos</TitleSection>
      <ItemListContainer>
        {perefiricos.map((posts) => (
          <Item
            key={posts.id}
            tag={posts.tag}
            pictureUrl={posts.pictureUrl}
            price={posts.price}
            title={posts.title}
          />
        ))}
      </ItemListContainer>
    </>
  );
}

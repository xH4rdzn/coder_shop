import { ItemContainer } from "./styles";

export function Item(){
    return(
        <>
          <ItemContainer>
            <span>PC</span>
            <img src="https://upload.wikimedia.org/wikipedia/pt/0/06/TW3_Wild_Hunt.png" alt="The Witcher 3" />
            <button>Ver Detalhes</button>
          </ItemContainer>
        </>
    )
}
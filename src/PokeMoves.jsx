import { moves } from './data';
import PokeMoveCard from './PokeMoveCard.jsx';

function PokeMoves() {
    return (
        <div>
        <h1>PokeMoves</h1>
        <ul>
            {moves.map((items) => (
                <PokeMoveCard key={items.id} {...items} />
            ))}
        </ul>
        </div>
    )
}

export default PokeMoves;
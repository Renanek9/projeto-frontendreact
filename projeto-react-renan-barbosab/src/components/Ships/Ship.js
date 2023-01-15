import React from 'react'
import { Button } from './Style';

export default function Ship(props) {
    const { ship, add } = props;
    return (
        <div>
            <img className="small" src={ship.image} alt={ship.name}></img>
            <h3>{ship.name}</h3>
            <div>R${ship.price.toFixed(2).replace(".", ",")}</div>
            <div>
                <Button onClick={() => add(ship)}>Adicionar ao carrinho</Button>
            </div>
        </div>
    );
};

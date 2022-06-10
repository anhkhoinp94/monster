import React from 'react';
import {Pokemon} from "../interface";
import PokemonList from "./PokemonList";
import "./pokemon.css";

interface Props {
    pokemons: Pokemon[]
}

export const PokemonCollection: React.FC<Props> = (props) => {
    const {pokemons} = props
    return (
        <div>
            <section className="collection-container">
                {pokemons.map((pokemon: Pokemon) => {
                    return (
                        <div className="" key={pokemon.id}>
                            <PokemonList
                                name={pokemon.name}
                                id={pokemon.id}
                                image={pokemon.sprites.front_default}
                            />
                        </div>
                    )
                })}
            </section>
        </div>)
};
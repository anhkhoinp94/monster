import React from 'react';
import {Pokemon} from "../interface";
import PokemonList from "./PokemonList";
import "./pokemon.css";
import {Detail} from "../App";

interface Props {
    pokemons: Pokemon[];
    viewDetail: Detail;
    setDetail: React.Dispatch<React.SetStateAction<Detail>>;
}

export const PokemonCollection: React.FC<Props> = (props) => {
    const {pokemons, viewDetail, setDetail} = props;

    const selectPokemon = (id: number) => {
        console.log(id);
    };

    return (
        <div>
            <section className="collection-container">
                {pokemons.map((pokemon: Pokemon) => {
                    return (
                        <div key={pokemon.id} onClick={() => selectPokemon(pokemon.id)}>
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
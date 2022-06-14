import React from 'react';
import {Pokemon, PokemonDetail} from "../interface";
import PokemonList from "./PokemonList";
import "./pokemon.css";
import {Detail} from "../App";

interface Props {
    pokemons: PokemonDetail[];
    viewDetail: Detail;
    setDetail: React.Dispatch<React.SetStateAction<Detail>>;
}

export const PokemonCollection: React.FC<Props> = (props) => {
    const {pokemons, viewDetail, setDetail} = props;

    const selectPokemon = (id: number) => {
        if (!viewDetail.isOpened) {
            setDetail({
                id: id,
                isOpened: true,
            })
        }
    };

    return (
        <>
            <section className={viewDetail.isOpened ? "collection-container-active" : "collection-container"}>
                {viewDetail.isOpened ? (<div className="overlay"></div>) : (<div className=""></div>)}
                {pokemons.map((pokemon: PokemonDetail) => {
                    return (
                        <div key={pokemon.id} onClick={() => selectPokemon(pokemon.id)}>
                            <PokemonList
                                viewDetail={viewDetail}
                                setDetail={setDetail}
                                name={pokemon.name}
                                id={pokemon.id}
                                abilities={pokemon.abilities}
                                image={pokemon.sprites.front_default}
                            />
                        </div>
                    )
                })}
            </section>
        </>)
};
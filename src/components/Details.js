import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/';
const urlSpecies = 'https://pokeapi.co/api/v2/pokemon-species/';

const Details = props => {
  const [sprite, setSprite] = useState('');
  const [descripcion, setDescripcion] = useState('');
  useEffect(() => {
    console.log(props.id);
    if (props.id !== 0 && props.id !== undefined) {
      fetch(`${urlPokemon}${props.id}`)
        .then(res => res.json())
        .then(resultPokemon => {
          setSprite(resultPokemon.sprites.front_default);
        });

      fetch(`${urlSpecies}${props.id}`)
        .then(res => res.json())
        .then(resultPokemon => {
          setDescripcion(
            resultPokemon.flavor_text_entries.find(
              entry => entry.language.name === 'en'
            ).flavor_text
          );

          console.log(descripcion);
        });
    }
  }, [props.id]);

  return (
    <>
      <div className="screen">
        <div className="touchRigth">
          <img src={sprite}></img>
          <p>{descripcion}</p>
        </div>
        <div className="buttonsPosition">
          <button className="navBtn navBtnLeft">
            <div className="arrow-left"></div>
          </button>
          <button className="navBtn navBtnRigth">
            <div className="arrow-right"></div>
          </button>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = function(state) {
  console.log(state);

  return {
    id: state.id.id
  };
};

export default connect(mapStateToProps)(Details);

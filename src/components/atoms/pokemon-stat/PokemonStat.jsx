import React from 'react';
import './PokemonStat.css';

const PokemonStat = (props) => {
  const {name, value} = props;
  return(
    <div className='a-pokemon-stat'>
      <span className='a-pokemon-stat__name'>{name}</span>
      <span className='a-pokemon-stat__Value'>{value}</span>
    </div>
  );
};
export default PokemonStat;
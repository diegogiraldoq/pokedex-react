import React from 'react';
import './PokemonTitle.css';

/**
 * pokemon title component
 * @returns {JSX.Element}
 */
const PokemonTitle = (props) => {
  const { name, image} = props;
  return(
    <div className='a-pokemon-title'>
      <div className='a-pokemon-title__image-mask'>
        <img 
          className='a-pokemon-title__image'
          src={image}
          alt='Imagen del tipo de elemento al cual pertenece el pokemon'
        /> 
      </div>
    <h1 className='a-pokemon-title__name'>{name}</h1>
    </div>
  );
};

export default PokemonTitle;
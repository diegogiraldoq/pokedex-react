import PokemonsCards from 'components/atoms/pokemons-cards/PokemonsCards';
import React from 'react';

const RelatedPokemons = () => (
  <section  className='m-related-pokemons'>  
    <h2 className='m-related-pokemon__titile'>Evolution Chain</h2>
    <PokemonsCards />
  </section>
);

export default RelatedPokemons;
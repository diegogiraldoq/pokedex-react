import React from 'react';
import DefaultLayout from 'components/templates/default-layout/DefaultLayout';
import './About.css';

/**
 * About component
 * @returns {JSX.Element}
 */
const About = ()  => (
  <DefaultLayout title='About'>
    <div className='about-container'>
      <h1>About page</h1>
      <p className='about-parrafo'>Esta aplicación fue diseñada para mostrar los 
        diferentes pokemones con las estadisticas de 
        dicho pokemon, espero sea de gran ayuda.
      </p>
    </div>
  </DefaultLayout>
);

export default About;
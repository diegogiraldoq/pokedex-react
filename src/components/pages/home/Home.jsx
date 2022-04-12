import React from 'react';
import { Link } from 'react-router-dom';
import DefaultLayout from 'components/templates/default-layout/DefaultLayout';
import './Home.css';


/**
 * Home component.
 * @returns {JSX.Element}
 */
const Home = () => (
  <DefaultLayout title='Home'>
    <div className='home-container'>
      <h1 className="title-initial__page">Busca tu pokemon</h1>
      <Link to='/pokemon/pikachu' className="link-pokemon__details">Ver detalles de pikachu</Link>
    </div>
  </DefaultLayout>
);

export default Home;
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from 'components/pages/home/Home';
import About from 'components/pages/about/About';
import PokemonDetails from 'components/pages/pokemon-details/PokemonDetails';
import NotFount from 'components/pages/not-found/NotFount';


/**
 * App component
 * @returns {JSX:Element}
 */
const App = () => (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/About" element={<About />} />
   <Route path="/Pokemon/:id" element={<PokemonDetails />} />
   <Route path="*" element={<NotFount />} />
   </Routes>
   </BrowserRouter>
);


export default App;
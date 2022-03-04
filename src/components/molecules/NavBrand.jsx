import React from "react";
import { useNavigate } from "react-router-dom";
/**
 * Navigation brand component
 * @returns {JSX.Element}
 */
export const NavBrand = () => {
  let navigate =useNavigate();
  const handleClick= () => {
    navigate('/')
  };
  return(
  <div oneClick={handleClick}>
    <img src="" alt="Logo de la aplicacion"/>
    <span>POKEDEX_</span>
  </div>
 );
};

export default NavBrand;
import React from "react";
import DefaultLayout from "components/templates/default-layout/DefaultLayout";
import errorimage from "assets/img/error.png";
import './NotFound.css';

/**
 * Not fount component
 * @returns {JSX.Element}
 */
const NotFound = () => (
<DefaultLayout title='404'>
    <img className='not-found__image' src={errorimage} alt='error de busqueda' />
</DefaultLayout>
);

export default NotFound;
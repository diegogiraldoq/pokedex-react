import React from 'react';
import SEO from 'components/organisms/seo/SEO';
import Navigation from 'components/organisms/navigation/Navigation';
import MainContainer from 'components/organisms/main-container/MainContainer';
import Footer from 'components/organisms/footer/Footer';
import 'assets/css/colors.css';
import 'assets/css/global.css';

/**
 * Default layout for site.
 * @param {{children: React.ReactNode title: string}} Props
 * @returns {JSX.Element}
 */
const DefaultLayout = (props) => (
  <>
    <SEO title={props.title} />
    <Navigation />
    <MainContainer>{props.children}</MainContainer>
    <Footer />
  </>
);
export default DefaultLayout;

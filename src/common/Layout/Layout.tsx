import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

interface ILayout {
  children?: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

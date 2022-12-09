import Footer from './Footer/Footer';
import Header from './Header/Header';

interface ILayout {
  children?: JSX.Element | undefined;
}

const Layout: React.FC<ILayout> = ({ children }: ILayout) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

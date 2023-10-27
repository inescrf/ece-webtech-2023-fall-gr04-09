import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';
import '../styles/globals.css';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

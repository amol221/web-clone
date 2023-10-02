
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import ProductCards from './components/ProductCards/ProductCards';
import BannerLogo from './components/banner-logo/BannerLogo';
import BuilderIcons from './components/builder-icons/BuilderIcons';
import ServicesProvide from './components/Service-provide/ServiceProvide';
import Newsletter from './components/newsletter/Newsletter';
import Info from './components/info/Info';
import WebDevSection from './components/webdev-section/webdev';
import DigitalProducts from './components/DigitalProducts/DigitalProducts';
import Header from './components/header/header';

import Footer from './components/Footer/Footer';
import FloatBtn from './components/FloatBtn/FloatBtn';
import MyComponent from './components/Mycomponent/MyComponent';


function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <MyComponent/>
      <BannerLogo/>
      <BuilderIcons/>
      <ServicesProvide/>
      <WebDevSection/>
      <Products />
      <ProductCards /> 
      <Newsletter /> 
      <Info />
      <DigitalProducts/>
      <Footer />
      <FloatBtn />
      
    </div>
  );
}

export default App;

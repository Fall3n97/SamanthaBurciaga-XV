import Hero from './components/Hero';
import Location from './components/Location';
import Dress from './components/Dressing';
import Confirmation from './components/Confirmation';
import Footer from './components/Footer';
import { ConfigProvider } from 'antd';
import './App.css';

function App() {
  return (
    <ConfigProvider
  theme={{
    token: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: '1.2em',
      colorText: '#e6b400',
      textShadow: '2px 2px 2px rgba(0,0,0, 0.2)'
    },
  }}>
      <Hero/>
      <Location />
      <Confirmation />
      <Dress />
      <Footer />
    </ConfigProvider>
  );
}

export default App;

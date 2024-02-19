import Hero from './components/Hero/index.js';
import Location from './components/Location/index.js';
import Dress from './components/Dressing/index.js';
import Confirmation from './components/Confirmation/index.js';
import Footer from './components/Footer/index.js';
import { ConfigProvider } from 'antd';
import './App.css';

function App() {
  return (
    <ConfigProvider
  theme={{
    token: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: '0.9em',
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

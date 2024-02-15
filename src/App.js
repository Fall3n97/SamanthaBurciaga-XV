import Hero from './components/Hero';
import Location from './components/Location';
import { ConfigProvider } from 'antd';
import './App.css';

function App() {
  return (
    <ConfigProvider
  theme={{
    token: {
      fontFamily:'Noto Serif, serif',
      fontSize: '1.1em',
      colorText: '#f5f5dc',
      textShadow: '2px 2px 2px rgba(0,0,0, 0.2)'
    },
  }}>
      <Hero/>
      <Location />
    </ConfigProvider>
  );
}

export default App;

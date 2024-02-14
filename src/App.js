import Hero from './components/Hero';
import { ConfigProvider } from 'antd';
import './App.css';

function App() {
  return (
    <ConfigProvider
  theme={{
    token: {
      fontFamily:'Noto Serif, serif'
    },
  }}>
      <Hero/>
    </ConfigProvider>
  );
}

export default App;

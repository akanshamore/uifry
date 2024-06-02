import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import Intro from './components/Intro';
import Features from './components/Features';
import Advantages from './components/Advantages';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';

import readyBG from './assets/images/readyBG.svg'
import Footer from './components/Footer';








function App() {
  return (
    <div style={{ maxWidth: '1400px', margin: 'auto', padding: '20px', }}>
      <Header />
      <Intro />
      <Features />
      <Advantages />
      <Testimonials />
      <FAQ />
      <div>
        <img src={readyBG} />
      </div>

      <Footer />
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Conatct from './components/Contact/Conatct';
import Home from './components/Home/Home';
import NotFount from './components/NotFount/NotFount';
import Products from './components/Products/Products';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="home" element= {<Home />} />
        <Route path="about" element= {<About />} />
        <Route path="products" element= {<Products />} />
        
        <Route path="Contact" element= {<Conatct />} />
        <Route path="*" element= {<NotFount />} />

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

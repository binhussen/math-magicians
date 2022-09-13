import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calulator';
import Home from './components/Home';
import Navbar from './components/NavBar';
import Quote from './components/Quote';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </>
);

export default App;

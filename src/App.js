import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calulator';
import Home from './components/Home';
import Quote from './components/Quote';
import Header from './components/Header';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </>
);

export default App;

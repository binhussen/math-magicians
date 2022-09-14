import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Quote from './components/Quote';
import Header from './components/Header';
import Calculator from './components/Calculator';

const App = () => (
  <div className="main">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </div>
);

export default App;

import logo from './logo.svg';
import './App.css';
import Template from './components/Template';
import Main from './components/Main';
import Contact from './components/Contact';
import Careers from './components/Careers';
import Team from './components/Team';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import './Components/global.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

const App = () =>(

  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/about" element= {<About />} />
      <Route path='/contact' element= {<Contact />} />
      <Route path="/projects" element= {<Projects />}/> 
    </Routes>
  </Router>
);


export default App;

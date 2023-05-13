import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';


function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route exact path="/Projects" element={<Projects />}/>
      </Routes>
    </Router>
  );

}
/*<Route path="*" element={<NotFound />}/>*/

export default App;

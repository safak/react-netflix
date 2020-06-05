import React from 'react';
import Homepage from './pages/homepage/Homepage';
import { HashRouter as Router} from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <Homepage/>
    </Router>
  );
}

export default App;

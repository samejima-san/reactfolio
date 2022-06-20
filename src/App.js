import { useState } from 'react';
import './App.css';
import Info from './components/Info';
import Businesscard from './components/Businesscard';


function App() {
  const [toggle, setToggle] = useState(true)
  const flipswitch = () =>{ setToggle(!toggle) }
  const renderText = () => {
    if(toggle){ return <Info /> }
    else{ return <Businesscard /> }
  }


  return (
    <div className="block">
      <Info />
      <Businesscard />
    </div>
  );
}

export default App;

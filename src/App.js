import { useState } from 'react';
import './App.css';
import Info from './components/Info';
import Businesscard from './components/Businesscard';
import File from './components/File';
import { Route, Switch} from 'react-router-dom';


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

import logo from './logo.svg';
import './App.css';
import {
  Pets 
} from './ui-components';
import { NavBar } from './ui-components';
import { MarketingFooter } from './ui-components';
 
 function App() {
    const navbarOverrides = {
      "Adicionar um pet":{
        style:{
          cursor : "pointer"
        },
        onClick : () => {
          alert("fodase")
        }
      }
    }

   return (
     <div className="App">
      <NavBar width={"100%"} overrides={navbarOverrides}/>
      <header className="App-header">
        <Pets />
      </header>
      <MarketingFooter width={"100%"}/>
    </div>
  );
}

export default App;

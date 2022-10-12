
import './App.css';
import {NamedExport} from './components/NamedExport.js'
import DefaultExport from './components/DefaultExport';

function App() {
  return (
    <div className="App">
      <NamedExport/>
      <DefaultExport/>
    </div>
  );
}

export default App;

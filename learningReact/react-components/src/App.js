
import './App.css';
import {NamedExport} from './components/NamedExport.js'
import DefaultExport from './components/DefaultExport';
import WithJSX from './components/withJSX';
import WithOutJSX from './components/WithOutJSX.JS';

function App() {
  return (
    <div className="App">
      <NamedExport/>
      <DefaultExport/>
      <WithJSX/>
      <WithOutJSX/>
    </div>
  );
}

export default App;

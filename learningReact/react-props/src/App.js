
import './App.css';
import Greeting from './component/Greeting';
import Welcome from './component/welcome'
function App() {
  return (
    <div className="App">
      <Greeting name="Bruce" superName="Bat-man">
        <p>This is Children props</p>
      </Greeting>
      <Greeting name="Clark" superName="Super-man">
        <button type="button">Click here</button>
      </Greeting>
      <Greeting name="Diana" superName="wonder-woman">
        <input type="text" id="diana"/>
      </Greeting>
      <Welcome name="Bruce" superName="Batman"/>
      <Welcome name="Clark" superName="Superman"/>
      <Welcome name="Diana" superName="Wonder Woman"/>
    </div>
  );
}

export default App;

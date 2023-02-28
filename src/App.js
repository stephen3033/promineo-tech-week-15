import './App.css';
import { housesAPI } from './housesAPI';

function App() {
  let data = housesAPI.get()
  console.log(data);
  console.log('test')
  return (
    <div className="App">
      <h1>Hello, world</h1>
    </div>
  );
}

export default App;

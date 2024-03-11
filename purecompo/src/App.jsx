import './App.css';
import SimpleCounterComponent from './components/SimpleCounterComponent';
import PureCounterComponent from './components/PureCounterComponent';

function App() {
  return (
    <div className="App">
      <h1>My components</h1>
      <PureCounterComponent/>
      <SimpleCounterComponent/>
    </div>
  );
}

export default App;

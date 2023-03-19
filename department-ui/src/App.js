import logo from './logo.svg';
import './App.css';
import Department from './Department';
import Employee from './Employee';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Department />
        <Employee />
      </header>
    </div>
  );
}

export default App;

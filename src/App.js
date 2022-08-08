import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AlertExample from './components/AlertExample';
import AlertComponent from './components/AlertComponent'
function App() {
  return (
    <div>
      <h1>Alerts</h1>
      <AlertComponent />
      <AlertExample />
    </div>
  );
}

export default App;

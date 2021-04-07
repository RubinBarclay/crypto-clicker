import './App.css';
import Power from './components/Power/Power';
import Shop from './components/Shop/Shop';
import Wallet from './components/Wallet/Wallet';

const App = () => {
  return (
    <div className="App">
      <Power />
      <Wallet />
      <Shop />
    </div>
  );
}

export default App;

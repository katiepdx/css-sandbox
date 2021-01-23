import './App.css';
import MenuList from './components/MenuList';
import { links } from './data/links'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hover</p>
        <MenuList allLinks={links} />
      </header>
    </div>
  );
}

export default App;

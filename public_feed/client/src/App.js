import logo from './logo.svg';
import './App.css';
import Feed from './components/Feed';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Search for a tag to load relevant images. Hover mouse over image to see title.
        </p>
        
      </header>
      
      <Feed/>
    </div>
  );
}

export default App;

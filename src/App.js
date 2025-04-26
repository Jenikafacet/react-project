import './App.css';
import Header from './component/Header';
import CardList from './component/CardList';
import CardActiveList from './component/CardActiveList';

function App() {
  return (
    <div className="App">
      <Header />
      <CardActiveList />
      <CardList />
    </div>
  );
}

export default App;

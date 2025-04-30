import './App.css';
import Header from './component/Header';
import CardList from './component/CardList';
import CardActiveList from './component/CardActiveList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Missing from './component/Missing';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<CardList />} />
          <Route path='/game' element={<CardActiveList />} />
          <Route path='*' element={<Missing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import './App.css';
import Header from './component/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";
import { WordsContextProvider } from './component/Context';

const CardList = React.lazy(() => import('./component/CardList'));
const CardActiveList = React.lazy(() => import('./component/CardActiveList'));
const Missing = React.lazy(() => import('./component/Missing'));

function App() {
  const ROUTES = {
    HOME: '/',
    GAME: '/game',
    MISSING: '*'
  };
    
  return (
    <WordsContextProvider>
      <Router>
        <div className="App">
          <Header />
          <React.Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path={ROUTES.HOME} element={<CardList />} />
              <Route path={ROUTES.GAME} element={<CardActiveList />} />
              <Route path={ROUTES.MISSING} element={<Missing />} />
            </Routes>
          </React.Suspense>
        </div>
      </Router> 
    </WordsContextProvider>  
  );
}

export default App;

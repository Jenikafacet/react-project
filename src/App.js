import './App.css';
import Header from './component/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";

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
  );
}

export default App;

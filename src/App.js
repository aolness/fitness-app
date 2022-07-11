import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
import WeightsPage from './pages/WeightsPage'
import CardioPage from './pages/CardioPage'
import DietPage from './pages/DietPage'
import FaqPage from './pages/FaqPage'
import RoutinesPage from './pages/RoutinesPage';
import exercises from './data/exercises'
import routines from './data/routines'


function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <h1>Fitness App</h1>
        <p>Track everything for your fitness goals</p>
      </header>
      <Navigation/>
      <main>
        <Route path='/' exact>
          <HomePage/>
        </Route>
        <Route path='/weights' exact>
          <WeightsPage exercises={exercises} routines={routines}/>
        </Route>
        <Route path='/routines'>
          <RoutinesPage routines={routines}/>
        </Route>
        <Route path='/cardio' exact>
          <CardioPage/>
        </Route>
        <Route path='/diet' exact>
          <DietPage/>
        </Route>
        <Route path='/faq' exact>
          <FaqPage/>
        </Route>
      </main>
      <footer>
        
      </footer>
      </Router>
    </div>
  );
}

export default App;

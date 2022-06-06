import {Route, Routes} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import CardDetail from './components/CardDetail'
import DogCreate from './components/CardCreate'
import './App.css';

function App() {
  return (
   <>
    <Routes>
      <Route path="/" element = {<LandingPage/>}/>
      <Route path="/home" element = {<Home/>}/>
      <Route path="/dogDetail/:id" element = {<CardDetail/>}/>
      <Route path="/create" element = {<DogCreate/>}/>
    </Routes>
   </>
  );
}

export default App;

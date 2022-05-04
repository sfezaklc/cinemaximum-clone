import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home'
import Header from './Components/Header/Header';
import Login from './Pages/Login';
import MoviesDetail from './Pages/MoviesDetail';
import BuyTicket from './Pages/BuyTicket';
function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/moviesdetail/:id" element={<MoviesDetail />} />
          <Route exact path="/buyticket/:id/:location" element={<BuyTicket />} />
        </Routes>
    </div>
  );
}

export default App;

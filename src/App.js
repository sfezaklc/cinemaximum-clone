import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Header from './Components/Header/Header';
import Login from './Pages/Login';
import MoviesDetail from './Pages/MoviesDetail';
import BuyTicket from './Pages/BuyTicket';
import UserProvider, { UserContext } from './Contexts/UserContext';
import TicketProvider from './Contexts/TicketContext';
import ChairProvider from './Contexts/ChairContext';
function App() {
  return (
    <>
      <UserProvider>
        <TicketProvider>
          <ChairProvider>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/moviesdetail/:id" element={<MoviesDetail />} />
              <Route exact path="/buyticket/:id/:location/:time" element={<BuyTicket />} />
            </Routes>
          </ChairProvider>
        </TicketProvider>
      </UserProvider>
    </>
  );
}

export default App;

import { Container } from 'react-bootstrap';
import './App.css';
import Navmenu from './component/Navmenu';
import { Routes, Route } from 'react-router-dom'
import ContactForm from './component/ContactForm';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import Ticket from './page/Ticket';
import ProdcutDetail from './page/ProdcutDetail'
import ProductList from './page/ProductList';
import ProductCard from './component/ProductCard';

function App() {
  return (
    <Container>
      <ContactForm/>
      <Navmenu />
      <Routes>
        <Route path='/' element={<ProductAll/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/products/:id' element={<ProdcutDetail />}></Route>
        <Route path='/ticket' element={<Ticket/>}></Route>
        <Route path='/list' element={<ProductList/>}></Route>
        <Route path='/card' element={<ProductCard/>}></Route>
      </Routes>
    </Container>
  );
}

export default App;

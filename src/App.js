import './styles/app.scss';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/layout/Header';
import Home from './components/home/Home';
import Footer from './components/layout/Footer';
import Contact from './components/contact/Contact';
import Cart from './components/cart/Cart';
import Shipping from './components/cart/Shipping';
import ConfirmOrder from './components/cart/ConfirmOrder';
import PaymentSuccess from './components/cart/PaymentSuccess';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import Myorders from './components/myorders/Myorders';
import OrderDetails from './components/myorders/OrderDetails';
import Dashboard from './components/admin/Dashboard';
import Users from './components/admin/Users';
import Orders from './components/admin/Orders';
import About from './components/about/About';
import Notfound from './components/layout/Notfound';












import './styles/app.scss';
import './styles/header.scss';
import './styles/home.scss';
import './styles/founder.scss';
import './styles/menu.scss';
import './styles/footer.scss';
import './styles/contact.scss';
import './styles/cart.scss';
import './styles/shipping.scss';
import './styles/confirmOrder.scss';
import './styles/paymentSuccess.scss';
import './styles/login.scss';
import './styles/profile.scss';
import './styles/table.scss';
import './styles/orderdetails.scss';
import './styles/dashboard.scss';
import './styles/about.scss';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/shipping' element={<Shipping/>}/>
        <Route path='/confirmOrder' element={<ConfirmOrder/>}/>
        <Route path='/paymentsuccess' element={<PaymentSuccess/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/me' element={<Profile/>}/>
        <Route path='/myorders' element={<Myorders/>}/>
        <Route path='/order/:id' element={<OrderDetails/>}/>
        <Route path='/admin/dashboard' element={<Dashboard/>}/>
        <Route path='/admin/users' element={<Users/>}/>
        <Route path='/admin/orders' element={<Orders/>}/>
        <Route path='/about' element={<About/>}/>


        <Route path='*' element={<Notfound/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

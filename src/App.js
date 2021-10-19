import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Services from './Pages/Services/Services';
import Doctors from './Pages/Doctors/Doctors';
import Contact from './Pages/Contact/Contact';
import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import Signup from './Pages/Signup/Signup';
import AuthProvider from './Context/AuthProvider';
import PrivetRoute from './Pages/Login/PrivetRoute/PrivetRoute';
import Individual from './Pages/Doctors/Doctor/Individual/Individual';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/doctors">
            <Doctors></Doctors>
          </Route>
          <PrivetRoute exact path="/doctors/:id">
            <Individual></Individual>
          </PrivetRoute>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <PrivetRoute path="/appointment">
            <Appointment></Appointment>
          </PrivetRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <Route path="*">
            <NotFoundPage></NotFoundPage>
          </Route>

        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

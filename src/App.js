import LoginForm        from "./pages/LoginForm";
import RegisterForm     from "./pages/RegisterForm";
import WelcomePage      from "./pages/WelcomePage";
import AuthLayout       from "./pages/AuthLayout";
import LastOrders       from './pages/LastOrders';
import Restaurants      from './pages/Restaurants';
import Profile          from './pages/Profile';

import { Route,Routes}  from 'react-router-dom';
import PrivateRoute     from './components/PrivateRoute'

function App() {
  return (
    <>
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <Routes>
          <Route path='/'         element={<WelcomePage />} />
          <Route path='/index'    element={<WelcomePage />} />
          <Route path='/login'    element={<LoginForm />} />
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/app'      element={<AuthLayout />}>
            <Route path='login'       element = {<LoginForm />}/>
          </Route>
          <Route path="/user">
            <Route path="last-orders" element = {<PrivateRoute><LastOrders /></PrivateRoute>}/>
            <Route path="restaurants" element={<PrivateRoute><Restaurants /></PrivateRoute>} />
            <Route path="profile"     element={<PrivateRoute><Profile /></PrivateRoute>} />
          </Route>
          
        </Routes>
      </div>
    </>
  );
}

export default App;

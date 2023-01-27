import {BrowserRouter, Route, Routes} from 'react-router-dom'; 
import { Dashboard } from './pages/dashboard';
import './App.css';
import { Login } from './pages/login';
import { AuthProvider } from './hooks/use-auth';
import { PrivateRoute } from './components/private-route';
import { About } from './pages/about';
import { ParamExample } from './pages/param-example';

function App() {
  return (
    <div className="App">
      <h1>Our Application</h1>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<PrivateRoute><Dashboard/></PrivateRoute>} path="/"></Route>
            <Route element={<Login/>} path="/login"/>
            <Route element={<About/>} path="/about"/>
            <Route element={<ParamExample/>} path="/param-example/:xloopParam/second/:secondXloopParam/:thirdXloopParam"/>
            <Route element={<ParamExample/>} path="/param-example"/>

          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

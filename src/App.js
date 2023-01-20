import {BrowserRouter, Route, Routes} from 'react-router-dom'; 
import { Dashboard } from './pages/dashboard';
import './App.css';
import { Login } from './pages/login';
import { AuthProvider } from './hooks/use-auth';
import { PrivateRoute } from './components/private-route';

function App() {
  return (
    <div className="App">
      <h1>Our Application</h1>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<PrivateRoute><Dashboard/></PrivateRoute>} path="/"></Route>
            <Route element={<Login/>} path="/login"/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

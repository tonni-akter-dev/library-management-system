import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from './Pages/context/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MyAccount from './Pages/Dashboard/MyAccount/MyAccount';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/dashboard"
              element={
                <Dashboard></Dashboard>
              }
            >
              <Route path={`/dashboard/myaccount`} element={<MyAccount />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

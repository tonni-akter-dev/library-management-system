import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from './Pages/context/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MyAccount from './Pages/Dashboard/MyAccount/MyAccount';
import About from './Pages/Home/About/About';
import AskALibrarian from './Pages/Home/AskALibrarian/AskALibrarian';
import Catalog from './Pages/Home/Catalog/Catalog';
import Home from './Pages/Home/Home/Home';
import AllDatabase from './Pages/Home/Resources/AllDatabase/AllDatabase';
import NewCollection from './Pages/Home/Resources/NewCollection/NewCollection';
import TopCollection from './Pages/Home/Resources/TopCollection/TopCollection';
import SearchCatalog from './Pages/Home/SearchCatalog/SearchCatalog';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            {/* user routes  starts */}

            <Route path="/" element={<Home />} />
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/asklibrarian" element={<AskALibrarian />} />

            {/* resouces route */}
            <Route path="/topcollection" element={<TopCollection />} />
            <Route path="/newcollection" element={<NewCollection />} />
            <Route path="/alldatabase" element={<AllDatabase />} />
            <Route path="/searchcatalog" element={<SearchCatalog />} />

            {/* resouces route ends*/}

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
            {/* user routes  ends */}












            
            {/* ADMIN routes  starts */}



            {/* ADMIN routes  ends */}



          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

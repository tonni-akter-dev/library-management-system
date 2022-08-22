import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Navbar from 'react-bootstrap/Navbar';
import './Dashboard.css';
const Dashboard = () => {
  const { user, admin, logout } = useAuth();
  return (
    <div className="container-fluid">
      {/* <nav className="container-fluid navbar navbar-dark text-light bg-dark p-2">
        <h4>Dashboard</h4>
        {user.email && <p className="ms-auto">{user?.displayName}</p>}
        {user.photoURL ? (
          <img
            src={user.photoURL}
            className="ms-3 rounded-pill"
            style={{ width: "50px" }}
            alt=""
          />
        ) : (
          <img
            src="https://i.ibb.co/gPS4kB7/women.png"
            className="ms-3 rounded-pill"
            style={{ width: "50px" }}
            alt=""
          />
        )}
      </nav> */}
      <div className="row">

        <div
          className="col-lg-2 col-sm-12 dashboard"
        
        >
          <div className="text-center">
            <img height="50px" className="mx-auto" src="https://i.ibb.co/y48PY0V/pu-logo-1.png" alt="" />

            <h5>Presidency University Library</h5>
          </div>
          <br />
          <div className="text-light ps-5">
            {!admin && (
              <div>
                <Link
                  to={`/dashboard/myaccount`}
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    display: "block",
                    marginBottom: "30px",
                    color: "white",
                  }}
                  className=" text-dark"
                >
                  <i className="fas fa-volleyball-ball"></i> My account
                </Link>
                <Link
                  to={`/dashboard/payment`}
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    display: "block",
                    marginBottom: "30px",
                    color: "white",
                  }}
                  className=" text-dark"
                >
                  <i className="fab fa-paypal"></i> Payment
                </Link>

              </div>
            )}
            {/* admin */}
            {admin && (
              <div>
                <Link
                  to={`/dashboard/allOrder`}
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    display: "block",
                    marginBottom: "30px",
                  }}
                  className=" text-dark"
                >
                  All Orders
                </Link>
                <Link
                  to={`/dashboard/myaccount`}
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    display: "block",
                    marginBottom: "30px",
                    color: "black",
                  }}
                  className=" text-dark"
                >
                  Myaccount
                </Link>
                {/*  All Course  */}
                <Link
                  to={`/dashboard/allProducts`}
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    display: "block",
                    marginBottom: "30px",
                  }}
                  className=" text-dark"
                >
                  All Products
                </Link>
                {/*Add Course*/}
                <Link
                  to={`/dashboard/addCake`}
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    display: "block",
                    marginBottom: "30px",
                  }}
                  className=" text-dark"
                >
                  Add Cake
                </Link>
              </div>
            )}
            {/* logout */}
            <button className="btn btn-dark" onClick={logout}>
              <i className="fas fa-sign-out-alt"></i> Logout
            </button>
          </div>
        </div>


        {/* dashport */}
        <div className="col-lg-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logout } = useContext(authContext);

  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => console.log(error));
      Swal.fire({
        position: "center-right",
        icon: "success",
        title: "Logout Success",
        showConfirmButton: false,
        timer: 1500
      });
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Menu</Link>
      </li>
      <li>
        <Link to="/order/dessert">Order</Link>
      </li>
      <li>
        <Link to="/secret">secret</Link>
      </li>
      {user ? (
        <></>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
      <li>
        <Link to="/signup">SignUp</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-10 text-white opacity-60 max-w-screen-xl mx-auto bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>

        <div className="navbar-end">
          <h2 className="mr-2">{user && <p>{user.email} </p>}</h2>
          {user ? (
            <>
              {" "}
              <a onClick={handleLogout} className="btn btn-success">
                Log out
              </a>{" "}
            </>
          ) : (
            <>
              {" "}
              <Link to="/login">
                <button className="btn btn-warning">Login</button>
              </Link>{" "}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

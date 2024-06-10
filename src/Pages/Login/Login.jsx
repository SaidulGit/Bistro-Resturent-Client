import React, { useContext, useEffect, useState } from "react";
import signUpbg from "../../assets/others/authentication.png";
import signUpimg from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { authContext } from "../../Provider/AuthProvider";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Login = () => {
  const [notAllow, setNotAllow] = useState(true);
  const { signIn } = useContext(authContext);
  const location = useLocation();
  const navigate = useNavigate();

 const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidateCaptcha = (e) => {
    const value =e.target.value;
    if (validateCaptcha(value)) {
      setNotAllow(false);
    } else {
      setNotAllow(true);
    }
  };

  const handleSignIN = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((res) => res.user)
      .catch((error) => console.log(error));
      Swal.fire({
        title: "SussessFul Login",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
      navigate(from, { replace: true });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div
        style={{ backgroundImage: { signUpbg } }}
        className="hero min-h-screen  bg-base-200"
      >
        <div className="hero-content gap-10 flex-row-reverse ">
          <img className="w-2/5" src={signUpimg} alt="" />
          <div className="space-y-10 w-7/12">
            <div className="text-center">
              {" "}
              <h1 className="text-5xl text-orange-300 font-bold">Login</h1>{" "}
            </div>
            <div className="card shrink-0 w-full shadow-2xl bg-base-100">
              <form onSubmit={handleSignIN} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <LoadCanvasTemplate />
                  <input onBlur={handleValidateCaptcha}
                    type="text"
                    name="captcha"
                    placeholder="Captcha type here"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <input 
                    disabled={notAllow}
                    className="btn btn-success btn-outline text-lg border-orange-400"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
              <p className="text-center mb-7">
                Don't have an account. please
                <NavLink
                  className="text-lg font-medium text-blue-600"
                  to="/signup"
                >
                  Sign Up
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

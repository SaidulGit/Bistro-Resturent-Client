import signUpbg from "../../assets/others/authentication.png";
import signUpimg from "../../assets/others/authentication2.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { authContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";



const SignUp = () => {
    const {createUser,updateUserProfile} = useContext(authContext);
    const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) =>{ 
    console.log(data)
    createUser(data.email, data.password)
    .then(res => res.user)
    .catch(error => console.log(error))
    updateUserProfile(data.name, data.photoURL)
    .then(()=>{ console.log('user update successfully')
      reset();
      navigate('/');

    })
    .catch((error)=>{
      console.log(error)
    })
    Swal.fire({
      position: "top-start",
      icon: "success",
      title: "Registation Success",
      showConfirmButton: false,
      timer: 1500
    });
};
 

  // }

  return (
    <>
      <Helmet>
        <title>Bistro Boss | sign Up</title>
      </Helmet>
      <div
        style={{ backgroundImage: signUpbg }}
        className="hero min-h-screen bg-base-200"
      >
        <div className="hero-content flex-col gap-40 lg:flex-row-reverse">
          <img className="w-2/5" src={signUpimg} alt="" />
          <div className="space-y-7 w-7/12">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Sign Up</h1>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    name="name"
                    placeholder="your name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-700">name is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">photo URL</span>
                  </label>
                  <input
                    {...register("photoURL", { required: true })}
                    type="text"
                    placeholder="PhotoURL"
                    className="input input-bordered"
                  />
                  {errors.photoURL && (
                    <span className="text-red-700">photo URL is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-700">Email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    {...register("password", {
                      required: "Password is required",
                      maxLength: 20,
                      minLength: 6,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errors.password?.type === "required" && (
                    <span className="text-red-700">password is required</span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="text-red-700">
                      password is minimun 6 charactars
                    </span>
                  )}
                  {errors.password?.type === "maxLangth" && (
                    <span className="text-red-700">
                      password is maximun 20 charactars
                    </span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <span className="text-red-700">
                      password have one uppercae one lowercase one special
                      charactars must
                    </span>
                  )}
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-outline btn-warning"
                    type="submit"
                    value="SignUp"
                  />
                </div>
              </form>
              <p className="text-center mb-2">
                Allready have an account.Please <NavLink className="text-lg font-medium text-blue-600" to="/login">Login</NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

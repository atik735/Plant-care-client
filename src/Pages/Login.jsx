import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { auth } from "../firebase.init";
import { sendPasswordResetEmail} from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";


const Login = (e) => {
  const {signInUser,googleSignIn} = useContext(AuthContext)
  const navigate =useNavigate()
  const location = useLocation()
  console.log(location)

  const emailRef = useRef()
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    setSuccess(false);
    setErrorMessage("");

    signInUser(email,password)
    .then((result) =>{
      console.log(result.user);
      navigate(location?.state || '/')
      setSuccess(true)
      Swal.fire({
  title: "Sign in Successfull!",
  icon: "success",
  draggable: true,
    timer: 1500
});
    })
    .catch(error =>{
      console.log(error.message);
      setErrorMessage(error.message)
      Swal.fire({
  icon: "error",
  title: "Oops...",
  text: error.message,
    timer: 1500
});
    })
  };

  const handleReset =() =>{
    console.log(emailRef.current.value)
    const email = emailRef.current.value
    sendPasswordResetEmail(auth,email)
    .then(() =>{
        alert("password reset email send")
        setErrorMessage("")
    })
    .catch(error =>{
        setErrorMessage(error.message)
        setSuccess(false)
    })
  }

    const handleGoogleSignIn =() =>{
      googleSignIn()
      .then((result) =>{
        console.log(result.user);
        
        navigate(location?.state || '/')


      })
      .catch(error =>{
        setErrorMessage(error.message);
      })
  }

  return (
    <div className="flex flex-col max-w-md p-6 mx-auto mt-12 rounded-md sm:p-10 bg-white shadow-2xl text-gray-800">
               <title>PayBill || Login</title>
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign in</h1>
        <p className="text-sm text-gray-600">Sign in to access your account</p>
      </div>
      <form onSubmit={handleLogin} className="space-y-4">
        <div className="space-y-2">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              required
              ref={emailRef}
              id="email"
              placeholder="leroy@jenkins.com"
              className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <div onClick={handleReset}>
              <Link
                rel="noopener noreferrer"
                className="text-xs hover:underline text-gray-600"
              >
                Forgot password?
              </Link>
            </div>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="*****"
                required
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                type="button"
                className="absolute top-2 right-4 bg-gray-200 p-0.5 px-1"
              >
                {" "}
                {showPassword ? (
                  <FaEyeSlash></FaEyeSlash>
                ) : (
                  <FaEye></FaEye>
                )}{" "}
              </button>
            </div>
          </div>
        </div>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {success && <p className="text-green-400">Login Successfull</p>}
        <div className="space-y-2">
          <div>
            <button
              type="submit"
              className="w-full px-8 py-3 cursor-pointer font-semibold rounded-md bg-violet-600 text-gray-50"
            >
              Sign in
            </button>
            <h3 className="text-center font-bold text-lg py-2">Or</h3>
            {/* Google */}
<button onClick={handleGoogleSignIn} className="btn w-full px-8 py-3 cursor-pointer font-semibold rounded-md bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
            
          </div>
          <p className="px-6 text-sm text-center text-gray-600">
            Don't have an account yet?
            <Link to="/register" className="underline text-violet-600">
              Register
            </Link>
            .
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;

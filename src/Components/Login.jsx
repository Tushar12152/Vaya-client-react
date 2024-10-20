import { BsGoogle } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Login = () => {


const handleSubmit=(e)=>{
    e.preventDefault()

     const email=e.target.email.value
     const password= e.target.password.value

     console.log(email,password)
}






    return (
        <div>
            l<div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Welcome Back</h2>
        <p className="text-center text-gray-600 mb-4">Login to your account</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
            name="email"
              type="email"
              placeholder="Email"
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
              <span className="ml-2 text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-blue-600 hover:text-blue-700 text-sm">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-slate-600 text-white rounded-md font-semibold hover:bg-slate-700 transition duration-300"
          >
            Sign In
          </button>
        </form>

        <div className="my-6 flex items-center justify-center">
          <span className="text-gray-500 text-sm">or sign in with</span>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            type="button"
            className="flex items-center space-x-2 border border-gray-300 p-2 rounded-md hover:bg-gray-50 transition"
          >
            <BsGoogle/>
            <span className="text-gray-600">Google</span>
          </button>
          <button
            type="button"
            className="flex items-center space-x-2 border border-gray-300 p-2 rounded-md hover:bg-gray-50 transition"
          >
            <FaFacebook/>
            <span className="text-gray-600">Facebook</span>
          </button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Don’t have an account?{' '}
            <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Login;
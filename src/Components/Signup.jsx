import { useState } from 'react';
import { imageUpload } from "../API'S/ImageUpload";
import useAuth from '../../Hooks/useAuth';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const Signup = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const axiosSecure=useAxiosSecure()
  const navigate = useNavigate()
  const { createUser,  } = useAuth()
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const image = e.target.image.files[0];
    const img = await imageUpload(image)
    const photo = img?.data?.display_url;

    const user= { email,name, photo, role:'user' }

    const result = await createUser(email, password)
    if (result.user) {
      toast.success("Registration complete...")
      navigate('/login')
      await axiosSecure.post('/users',user)

      
    }
    


  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full space-y-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Profile Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            {imagePreview && (
              <div className="mt-2">
                <img
                  src={imagePreview}
                  alt="Profile Preview"
                  className="h-20 w-20 rounded-full object-cover"
                />
              </div>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-slate-500 text-white font-semibold rounded-lg hover:bg-slate-600 focus:outline-none"
          >
            {/* {loading ? "Sign Up" : "...."} */}
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center text-gray-500">
          Already have an account? <Link to='/login' className="text-blue-500 hover:underline">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

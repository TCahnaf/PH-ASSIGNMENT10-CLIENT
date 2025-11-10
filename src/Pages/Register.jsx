import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Providers/AuthProvider';




const Register = () => {
  document.title = "registration-page"

    const {createUser, setUser, updateUser} = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const pattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;





    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
      if(!pattern.test(password)){
        setError('please make sure the password is at least 6 characters and contains at least one uppercase letter and one lower case letter')
        return
      }





        const photo = e.target.photo.value;
        const name = e.target.name.value
        createUser(email, password) 
        .then(result => {const user = result.user;
            updateUser({displayName:name, photoURL:photo}).then(
                () => {setUser({...user, displayName: name, photoURL: photo})
            console.log(user)
          navigate(location.state?.from || '/', { replace: true });
        
        }
            ).catch(error => {
                setUser(user);
            })
          




        })
        .catch(error => {
            console.log(error);})
      

    }
    return (

         <div className="flex justify-center min-h-screen items-center bg-gradient-to-br from-red-700 via-red-500 to-black">
      <div className="card bg-teal-200 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Register your account
        </h2>
        <form onSubmit={handleRegister}  className="card-body">
          <fieldset className="fieldset">
            {/* name */}
            <label className='name'>Name</label>
            <input 
            name = "name"
            type="text"
            className='input'
            placeholder='Name'
            required
            
            />
            {/* email  */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            {/* photo-url */}
            <label className='label'>Photo</label>
            <input 
            name = "photo"
            type="text"
            className='input'
            placeholder='photoURL'
            required

            
            
            />
            {/* password  */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
            
             {error && <p className='text-red-600'>{error}</p>}

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <p className="font-semibold text-center pt-5">
              Already Have An Account ?{" "}
              <Link className="text-secondary" to="/login">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
     

  
      
    </div>
  );
      
 
};

export default Register;
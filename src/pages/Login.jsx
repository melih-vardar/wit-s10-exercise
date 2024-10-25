import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'

function Login({ setUser }) {
    const {
      register,
      handleSubmit,
      reset,
      formState: {errors, isValid},
    } = useForm({
      defaultValues: {
        email:'',
        password:'',
      },
      mode: 'onChange',
    })

    const history = useHistory();

    const submitFn = (data) => {
      axios
      .post('https://reqres.in/api/users', data)
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          setUser(response.data.email);
          reset();
          history.push('/home')
        }
      })
    }

  return (
    <div className='flex justify-center mt-32'>
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form 
        onSubmit={handleSubmit(submitFn)}
        className="space-y-6">
          <h5 class="text-xl font-medium text-gray-900 dark:text-white">Sign in</h5>
        <div>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Email:
            <input {...register('email', {
              pattern: {
                value:   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Please enter a valid e-mail.',
              }
  })}
  placeholder="example@example.com"
  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"/>
          </label>
          {errors.email && (
            <p className='text-red-600'>{errors.email.message}</p>
        )}
          </div>

           <div>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Password:
            <input {...register('password', {
              pattern: {
                value:  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message: 'Minimum eight characters, at least one letter and one number required.',
              }
  })}
  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"/>
          </label>
          {errors.password && (
            <p className='text-red-600'>{errors.password.message}</p>
        )}
          </div>
          <div>
            <button disabled={!isValid} 
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Giriş yap
            </button>
            </div>       
        </form>
      
    </div>
    </div>
  )
}

export default Login

import { Email, Password } from '@mui/icons-material'
import React from 'react'
import { object,array,string,number, assert } from 'superstruct'
import { useForm } from 'react-hook-form'

const SuperSchema = object({
    name:string(),
    email:string(),
    password:string()
})

function SuperStructFuc() {
    
    const {handleSubmit,register,formState:{errors}} = useForm()
    

    const onsubmit = (data) => {

        try {
            assert(data,SuperSchema)
            console.log(data);
            
        } catch (error) {   
            console.log(error,'xatolikbor');
            
            
        }
    }

    return (
      <div>
        <form
          className="w-[28%] bg-slate-500  p-4 mt-6 m-auto"
          onSubmit={handleSubmit(onsubmit)}
        >
          <p className="font-black size-[23px] text-center">Registration</p>
          <br />
          <div className="mb-5  ">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your Name
            </label>
            <input
              {...register("name", { required: "Ismingizni kiriting" })}
              type="text"
              id="text"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
            {errors.name && <p className="text-red-700">Ismingizni kiriting</p>}
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your Email
            </label>
            <input
              {...register("email", { required: "Email Kiriting" })}
              type="text"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
            />
            {errors.email && <p className="text-red-700">Email Kiriting</p>}
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              password
            </label>
            <input
              {...register("password",{required:'Parol kiriting'})}
              placeholder="1234"
              type="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
            {errors.password && <p className="text-red-700">Parol kiriting</p>}
          </div>
          <div className="flex items-start mb-5">
            <div className="flex items-center h-5"></div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register new account
          </button>
        </form>
      </div>
    );
}


export default SuperStructFuc
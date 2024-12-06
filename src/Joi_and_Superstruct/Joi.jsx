import Joi from "joi";
import React from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

const JoiSchema = Joi.object({
  name: Joi.string().required().min(4).max(10).messages({
    "string.base": "Ismingizni kiriting",
    "string.min": "Kamida 4ta harf",
    "string.max": "Max 10 ta harf",
  }),

  password: Joi.string().required().min(5).max(10).messages({
    "string.base": "Parol kiriting",
    "string.min": "Min 5ta belgi",
    "string.max": "Max 10ta belgi",
  }),
});

function JoiFuc() {

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: joiResolver(JoiSchema) });
  
  const onsubmit = (data) => {
    console.log(data);
  }

  return (
    <div>
      <div>
        <form
          className="w-[28%] bg-slate-500 rounded-lg  p-4 mt-6 m-auto"
          onSubmit={handleSubmit(onsubmit)}
        >
          <p className="font-black size-[23px] text-center">Login</p>
          <br />
          <div className="mb-5  ">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your Name
            </label>
            <input
              {...register("name")}
              type="text"
              id="text"
              placeholder="Name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
            {errors.name && (
              <p className="text-red-500">{"Ismingizni kiriting"}</p>
            )}
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              password
            </label>
            <input
              {...register("password")}
              placeholder="1234"
              type="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
            {errors.password && (
              <p className="text-red-500">{"Parol kiriting"}</p>
            )}
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default JoiFuc;

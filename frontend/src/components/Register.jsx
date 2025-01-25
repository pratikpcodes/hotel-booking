import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { apiRegister } from "../apis/apiClient";
import { useMutation } from "react-query";
import { useAppContext } from "../contexts/AppContextProvider";

const Register = () => {
  const { showToast, toastMsg } = useAppContext();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const mutation = useMutation(apiRegister, {
    onSuccess: () => {
      console.log("i am success in use mutation register.jsx");
      showToast({
        message: "hello i am toast Registration successful",
        type: "SUCCESS",
      });
    },
    onError: (error) => {
      console.log("i am error in mutation register.jsx" + error.message);
      showToast({
        message: "hello i am toast Registration not successful",
        type: "failed",
      });
    },
  });
  // Handle form submission
  const onSubmit = async (data) => {
    // console.log("Form Data Submitted:", data);

    // await apiRegister(data);

    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-4 my-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Register Yourself !!
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-sm text-red-600 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-sm text-red-600 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <p className="text-sm text-red-600 mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* First Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              {...register("firstName", { required: "First name is required" })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your first name"
            />
            {errors.firstName && (
              <p className="text-sm text-red-600 mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          {/* Last Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              {...register("lastName", { required: "Last name is required" })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your last name"
            />
            {errors.lastName && (
              <p className="text-sm text-red-600 mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600 focus:ring focus:ring-blue-300"
          >
            Register
          </button>

          {/* Message Display */}
          {toastMsg?.message && `${toastMsg.message} ::: ${toastMsg.type}`}

         
        </form>
      </div>
    </div>
  );
};

export default Register;

import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { apiSignIn, apiVerifyToken } from "../apis/apiClient";
import { useMutation } from "react-query";
import { useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContextProvider";
const SignIn = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const { toastMsg, showToast } = useAppContext();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { data } = useQuery("verifyToken", apiVerifyToken, {
    enabled: toastMsg.isloggedIn === "TRUE",
  });

  // Use an empty string for initial state
  const mutation = useMutation(apiSignIn, {
    onSuccess: () => {
      // showToast("SIGN IN SUCCESSFULL ONS  UCCESS MUTATION SIGNIN.JSX");
      showToast({
        message: "hello i am toast SignIN successful",
        type: "SUCCESS",
        isloggedIn: "TRUE",
      });
    },
    onError: () => {
      showToast("SIGN IN UNSUCCESSFULL ON ERROR MUTATION SIGNIN.JSX");
      showToast({
        message: "hello i am toast sIGNin not successful",
        type: "failed",
        isloggedIn: "FALSE",
      });

      // queryClient.invalidateQueries("verifyToken"); // This will clear cached data
      queryClient.removeQueries("verifyToken"); // Fully remove cached data
    },

    // https://chatgpt.com/share/6793d850-7b44-8001-8335-74432c306c03
  });
  useEffect(() => {
    if (toastMsg.isloggedIn === "TRUE" && data?._id) {
      navigate("/");
    }
  }, [toastMsg.isloggedIn, data, navigate]);

  const onSubmit = async (data) => {
    // console.log(data);
    // await apiSignIn(data);

    mutation.mutate(data);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-4 my-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Sign In !!
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600 focus:ring focus:ring-blue-300"
          >
            Sign -In
          </button>

          <label className="block text-sm font-medium text-green-500 mt-3">
            dsdsssd:: {toastMsg.message} ::: {toastMsg.type} :::
            {toastMsg.isloggedIn}
          </label>
          <button
            onClick={() => {
              data._id && navigate("/");
            }}
          >
            {data?.message} {"  ::  "}
            {data?._id}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

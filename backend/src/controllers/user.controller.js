import User from "../models/user.models.js";
import express from "express";
import { apiResponse } from "../utils/apiResponse.js";
import { apiError } from "../utils/apiError.js";
import jwt from "jsonwebtoken";
export async function userRegister(req, res) {
  try {
    let user = await User.findOne({
      email: req.body.email,
    });

    if (user) {
      return res
        .status(400)
        .json(new apiResponse(200, user, "User already exists"));
    }

    user = new User(req.body);
    await user.save();

    const firstName = req.body.firstName;

    return res
      .status(200)
      .json(
        new apiResponse(
          200,
          firstName,
          "Registration Successful & refresh token sent"
        )
      );
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

export async function userLogin(req, res) {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res
        .status(400)
        .json(new apiResponse(400, "ERROR", "User not found pls register"));
    }

    const isPasswordCorrect = await user.isPasswordCorrect(req.body.password);
    if (!isPasswordCorrect) {
      return res
        .status(400)
        .json(
          new apiResponse(400, "ERROR", "User found but password is not correct")
        );
    }

    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();
    res.cookie("access_token", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Secure for production (https)
      maxAge: 3600000, // 1 hour
      sameSite: "Strict", // Adjust to "Lax" or "None" for cross-origin requests
    });

    // Set refresh token cookie
    res.cookie("refresh_token", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Secure for production (https)
      maxAge: 86400000, // 24 hours
      sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax", // "None" for cross-origin in production
    });

    return res
      .status(200)
      .json(
        new apiResponse(
          200,
          refreshToken,
          "Sign In Successful & refresh token sent"
        )
      );
  } catch (error) {
    res.status(500).send({
      message: error.message,
      messagecustom: "helooo man this is catch block of user routes / sign-in",
    });
  }
}

// export const validateToken = async (error, req, res, next) => {
//   try {
//     const token = req.cookies["access_token"];

//     if (!token)
//       return res.status(600).json({
//         message: "token not found in cookies server code error",
//       });

//     const decodeToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

//     if (!decodeToken)
//       return res.status(600).json({
//         message: "token invalid verification failed Unauthorised access",
//       });
//       // res.status(500).send({
//       //   message: error.message,
//       //   messagecustom:
//       //     "Hi token is verified soon we redirect",
//       // });

//     next();
//   } catch (error) {
//     res.status(500).send({
//       message: error.message,
//       messagecustom:
//         "helooo man this is catch block of validate token user.controller.js",
//     });
//   }
// };



export const validateToken = async (req, res, next) => {
  try {
    const token = req.cookies["access_token"]; // Correct access to cookies

    if (!token) {
      return res.status(401).json({
        message: "Token not found in cookies.",
      });
    }

    // Verify token
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    // Store the _id in the request object for access in other middlewares or routes
    req._id = decodedToken._id;  

    next(); // Proceed to the next middleware or route handler

  } catch (error) {
    // Handle invalid or expired token errors
    return res.status(401).json({
      message: "Invalid or expired token.",
      messagecustom: "This is the catch block of validateToken.",
    });
  }
};
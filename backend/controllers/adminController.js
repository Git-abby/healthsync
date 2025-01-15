import validator from "validator";
import bycrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import jwt from "jsonwebtoken";

import doctorModel from "../models/doctorModel.js";

// API for adding for new doctors
const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      fees,
      address,
    } = req.body;
    const imageFile = req.file;

    // To check if nay of the field missing
    if (
      !name ||
      !email ||
      !password ||
      !speciality ||
      !degree ||
      !experience ||
      !about ||
      !fees ||
      !address
    ) {
      return res.json({ success: false, message: "all filed are required!" });
    }

    //validating email
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Please enter valid email!" });
    }

    // Validating password
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter strong password!",
      });
    }

    //hashing doctor pass
    const salt = await bycrypt.genSalt(10);
    const hashedPassword = await bycrypt.hash(password, salt);

    // uploading image to cloudinary
    const imageUploadToCloudinary = await cloudinary.uploader.upload(
      imageFile.path,
      { resource_type: "image" }
    );

    const imageURL = imageUploadToCloudinary.secure_url;

    const doctorData = {
      name,
      email,
      image: imageURL,
      password: hashedPassword,
      speciality,
      degree,
      experience,
      about,
      fees,
      address: JSON.parse(address),
      date: Date.now(),
    };

    const newDoctor = new doctorModel(doctorData);
    await newDoctor.save();

    res.json({ success: true, message: "Doctor added successfully" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.SecretKey);
      res.json({ success: true, message: "Successfully logged in", token });
    } else {
      res.json({
        success: false,
        message: "Invalid Credentials login failed!",
      });
    }
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: `${error.message} login failed!` });
  }
};

export { addDoctor, adminLogin };

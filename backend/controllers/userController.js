import validator from "validator";
import bcrypt from "bcryptjs";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { v2 as cloudinary } from "cloudinary";

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !password || !email) {
      return res.json({ success: false, message: "Missing details" });
    }
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Enter a valid email" });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Enter strong password that contains at least 8 digits",
      });
    }

    // hashing our password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userData = {
      name,
      email,
      password: hashedPassword,
    };

    // storing new user to db
    const newUser = new userModel(userData);
    const user = await newUser.save();

    // generating token for user
    const token = jwt.sign({ id: user._id }, process.env.SecretKey);

    res.json({ success: true, token });
  } catch (error) {
    console.error(error.message);
    res.json({ success: false, message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User does not exist" });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (isPasswordMatch) {
      const token = jwt.sign({ id: user._id }, process.env.SecretKey);
      res.json({ success: true, token });
    } else {
      return res.json({ success: false, message: "Invalid Credentials" });
    }
  } catch (error) {
    console.error(error.message);
    res.json({ success: false, message: error.message });
  }
};

// API to get user data
const getUserData = async (req, res) => {
  try {
    const { id } = req.body;
    const userData = await userModel.findById(id).select("-password");
    res.json({ success: true, userData });
  } catch (error) {
    console.error(error.message);
    res.json({ success: false, message: error.message });
  }
};

// API to update user data
const updateUserData = async (req, res) => {
  try {
    const { id, name, email, phone, address } = req.body;
    const imageFile = req.file;

    if (!name || !email || !phone || !address) {
      return res.json({ success: false, message: "All fields are required!" });
    }
    await userModel.findByIdAndUpdate(id, {
      name,
      email,
      phone,
      address: JSON.parse(address),
    });

    if (imageFile) {
      // upload image to cloudinary
      const imageUploadtoCloudinary = await cloudinary.uploader.upload(
        imageFile.path,
        { resource_type: "image" }
      );
      const imageURL = imageUploadtoCloudinary.secure_url;

      await userModel.findByIdAndUpdate(id, { image: imageURL });

      const userData = await userModel.findById(id).select("-password");
      console.log("User>>", userData);
    }

    res.json({ success: true, message: "Profile updated successfully" });
  } catch (error) {
    console.error(error.message);
    res.json({ success: false, message: error.message });
  }
};
export { registerUser, loginUser, getUserData, updateUserData };

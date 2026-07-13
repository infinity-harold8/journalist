//Models
const User = require("../models/User.js");
const bcrypt = require("bcrypt");

const HTTP_STATUS = require("../configurations/constants/HTTP_STATUSES.js");

// Create user Table
const createUser = async (request, response) => {
  // console.log(request.body);
  try {
    const { user_name, password, role, is_active } = request.body;

    // Validation
    if (!user_name || !password || !role) {
      return response.status(HTTP_STATUS.BAD_REQUEST.status).json({
        message: `${HTTP_STATUS.BAD_REQUEST.message}: All fields are required!`,
      });
    }

    // Hashed Password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      user_name,
      password: hashedPassword,
      role,
      is_active,
    });

    // await newUser.save();

    if (!newUser) {
      return response.status(HTTP_STATUS.INTERNAL_SERVER_ERROR.status).json({
        message: `${HTTP_STATUS.INTERNAL_SERVER_ERROR.message}: Something went Wrong!`,
      });
    }

    return response.status(HTTP_STATUS.CREATED.status).json(newUser);
  } catch (error) {
    console.log("Error: ", error);
  }
};

// Get All Users
const getUser = async (request, response) => {
  // console.log(request);
  try {
    const users = await User.find({});
    return response.status(HTTP_STATUS.OK.status).json(users);
  } catch (error) {
    console.log("Error: ", error);
  }
};

const updateUser = async (request, response) => {
  try {
    const { id } = request.params;
    const { user_name, password, role } = request.body;

    // Validation
    if (!user_name || !password || !role) {
      return response.status(HTTP_STATUS.BAD_REQUEST.status).json({
        message: `${HTTP_STATUS.BAD_REQUEST.message}: All fields are required!`,
      });
    }

    //Find User
    const user = await User.findById(id);
    if (!user) {
      return response.status(HTTP_STATUS.NOT_FOUND.status).json({
        message: `${HTTP_STATUS.NOT_FOUND.message}: User not found!`,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user.user_name = user_name;
    user.password = hashedPassword;
    user.role = role;

    await user.save();

    return response
      .status(HTTP_STATUS.OK.status)
      .json({ message: `${HTTP_STATUS.OK.message}: User updated!` });
  } catch (error) {
    console.log("Error: ", error);
  }
};

// Delete a resource
const deleteUser = async (request, response) => {
  try {
    const { id } = request.params;
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return response.status(HTTP_STATUS.NOT_FOUND.status).json({
        message: `${HTTP_STATUS.NOT_FOUND.message}: User not found!`,
      });
    }

    return response.status(HTTP_STATUS.OK.status).json({
      message: `${HTTP_STATUS.OK.message}: User successfully deleted!`,
    });
  } catch (error) {
    console.log("Error: ", error);
  }
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUser,
};

const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (request, response) => {
  try {
    const { user_name, password } = request.body;
    // console.log("Login request received with:", { user_name, password });
    const user = await User.findOne({ user_name });
    if (!user) {
      return response
        .status(404)
        .json({ success: false, message: "Invalid Credential" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return response
        .status(400)
        .json({ success: false, message: "Invalid Credentials" });
    }

    const accessToken = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

    const refreshToken = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: "1d" },
    );

    response.cookie("jwt", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    return response.status(200).json({
      success: true,
      isSuccess: true,
      message: "Logged in successfully",
      token: accessToken,
      data: user,
    });
  } catch (error) {
    console.error(error);
    return response
      .status(500)
      .json({ message: "Someting went wrong!", isError: true });
  }
};

const logout = async (request, response) => {
  try {
    response.clearCookie("jwt", {
      httpOnly: true,
      secure: false,
      sameSite: "none",
    });
    return response
      .status(200)
      .json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: "Someting went wrong!" });
  }
};

const getCurrentUser = async (request, response) => {
  try {
    const { id } = request.params;
    const users = await User.findById(id);
    return response.status(HTTP_STATUS.OK.status).json(users);
  } catch (error) {
    console.log("Error: ", error);
  }
};

module.exports = {
  login,
  logout,
  getCurrentUser,
};

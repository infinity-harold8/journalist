const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { HTTP_STATUS } = require("../configurations/constants/HTTP_STATUSES");

const login = async (request, response) => {
  try {
    const { user_name, password } = request.body;
    console.log(user_name, password);
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
      { expiresIn: "15s" },
    );

    const refreshToken = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: "1d" },
    );

    // response.cookie("accessToken", accessToken, {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === "production",
    //   sameSite: "lax",
    // });

    response.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    const sanitizedUser = {
      user_name: user.user_name,
      role: user.role,
    };

    return response.status(200).json({
      message: "Login successful.",
      isSuccess: true,
      accessToken,
      user: sanitizedUser,
    });
  } catch (error) {
    console.error(error);
    return response
      .status(500)
      .json({ message: "Someting went wrong!", isError: error });
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
    // const { id } = request.params;
    // console.log(id);
    // const user = await User.findById(id);
    // console.log(request.user);
    // console.log(HTTP_STATUS.OK.status);
    return response.status(200).json({
      message: "Current user retrieved.",
      isSuccess: true,
      user: request.user,
    });
  } catch (error) {
    // return;
    return response
      .status(500)
      .json({ message: "Something went wrong! ", isSuccess: false });
  }
};

const refreshAccessToken = async (request, response) => {
  try {
    const token = request.cookies?.refreshToken;
    jwt.verify(
      token,
      process.env.JWT_REFRESH_SECRET,
      async (error, decoded) => {
        // console.log(error);
        if (error) {
          return response
            .status(401)
            .json({ message: "Token Expired or Invalid" });
        }

        const user = await User.findById(decoded.id);
        console.log(user);
        if (!user) {
          return response.status(404).json({ message: "User not Found! " });
        }

        request.user = user;

        const accessToken = jwt.sign(
          {
            id: user._id,
          },
          process.env.JWT_SECRET,
          { expiresIn: "15s" },
        );

        return response.status(200).json({
          message: "Login successful.",
          isSuccess: true,
          accessToken,
          user,
        });
      },
    );
  } catch (error) {
    // console.error(error);
    return response.status(500).json({ message: "Something went wrong! " });
  }
};

module.exports = {
  login,
  logout,
  getCurrentUser,
  refreshAccessToken,
};

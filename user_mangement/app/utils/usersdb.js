import UserModel from "../lib/db/userModel";
import connectDB from "../lib/db/connectDB";
const getUsers = async () => {
  try {
    await connectDB();
    const users = await UserModel.find({});
    console.log(users);
    return users;
  } catch (error) {
    console.error(`Error: ${error.message}`);
    return { error: error.message };
  }
};

const addUser = async (user) => {
  try {
    await connectDB();
    const newUser = await UserModel.create(user);
    return newUser;
  } catch (error) {
    console.log(error.message);
    return { error: error.message };
  }
};

//update user
const updateUser = async (user) => {
  try {
    await connectDB();
    console.log(user);
    const updatedUser = await UserModel.findByIdAndUpdate(user.id, user, {
      new: true,
      runValidators: true,
    });
    return updatedUser;
  } catch (error) {
    console.log(error.message);
    return { error: error.message };
  }
};

//find user by id
const getUserById = async (id) => {
  try {
    await connectDB();
    const user = await UserModel.findById(id);
    return user;
  } catch (error) {
    console.log(error.message);
  }
};

//find user by email
const getUserByEmail = async (email) => {
  try {
    await connectDB();
    const user = await UserModel.findOne({ email });
    return user;
  } catch (error) {
    console.log(error.message);
    return { error: error.message };
  }
};

//delete deleteUser
const deleteUser = async (id) => {
  try {
    await connectDB();
    const user = await UserModel.findByIdAndDelete(id);
    return user;
  } catch (error) {
    console.log(error.message);
    return { error: error.message };
  }
};
export {
  getUsers,
  addUser,
  updateUser,
  getUserById,
  getUserByEmail,
  deleteUser,
};

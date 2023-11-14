import { UserBody } from "../controllers/createUser";
import { userRepository } from "../repositories/userRepository";
import bcrypt from "bcrypt";

export const createUser = async (user: UserBody) => {
  let passwordHashed = "";

  if (user?.password) {
    passwordHashed = await bcrypt.hash(user.password, 10);
  } else {
    passwordHashed = await bcrypt.hash(Math.random().toString(), 10);
  }

  const createUserData = {
    name: user.name,
    email: user.email,
    password: passwordHashed,
    picture: user?.image,
  };

  const newUser = await userRepository.createUser(createUserData);

  return newUser;
};

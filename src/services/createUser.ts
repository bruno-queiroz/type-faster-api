import { UserBody } from "../controllers/createUser";
import { userRepository } from "../repositories/userRepository";
import bcrypt from "bcrypt";

export const createUser = async (user: UserBody) => {
  const passwordHashed = await bcrypt.hash("123", 10);

  if (user.image) {
    user.picture = user.image;
    delete user.image;
  }

  const newUser = await userRepository.createUser({
    ...user,
    password: passwordHashed,
  });

  return newUser;
};

import { User, userRepository } from "../repositories/userRepository";
import bcrypt from "bcrypt";

export const createUser = async (user: User) => {
  const passwordHashed = await bcrypt.hash(user.password, 10);

  const newUser = await userRepository.createUser({
    ...user,
    password: passwordHashed,
  });

  return newUser;
};

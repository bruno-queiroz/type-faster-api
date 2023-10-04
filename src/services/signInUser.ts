import { IncorrectPassword } from "../errors/IncorrectPassword";
import { UserNotFound } from "../errors/UserNotFound";
import { userRepository } from "../repositories/userRepository";
import bcrypt from "bcrypt";

export const signInUser = async (email: string, password: string) => {
  const userFoundOnDatabase = await userRepository.findUnique(email);

  if (!userFoundOnDatabase) {
    throw new UserNotFound("User not found");
  }

  const isUserPasswordCorrect = await bcrypt.compare(
    password,
    userFoundOnDatabase.password
  );

  if (!isUserPasswordCorrect) {
    throw new IncorrectPassword("Incorrect password");
  }

  return {
    name: userFoundOnDatabase.name,
    picture: userFoundOnDatabase.picture,
  };
};

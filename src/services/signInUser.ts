import { IncorrectPassword } from "../errors/IncorrectPassword";
import { userRepository } from "../repositories/userRepository";
import bcrypt from "bcrypt";

export const signInUser = async (email: string, password: string) => {
  const userFoundOnDatabase = await userRepository.findUniqueOrThrow(email);

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

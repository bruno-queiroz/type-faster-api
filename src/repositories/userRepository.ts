import { prisma } from "../app";

export interface User {
  name: string;
  email: string;
  password: string;
  picture?: string;
}
export const userRepository = {
  async createUser(user: User) {
    const newUser = await prisma.user.create({
      data: user,
    });

    return newUser;
  },
};

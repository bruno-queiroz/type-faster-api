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
      select: {
        name: true,
        email: true,
        picture: true,
        id: true,
      },
    });

    return newUser;
  },

  async findUnique(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        name: true,
        email: true,
        picture: true,
        id: true,
        password: true,
      },
    });

    return user;
  },
};

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
        createdAt: true,
      },
    });

    return newUser;
  },

  async findUniqueOrThrow(email: string) {
    const user = await prisma.user.findUniqueOrThrow({
      where: {
        email,
      },
    });

    return user;
  },
};

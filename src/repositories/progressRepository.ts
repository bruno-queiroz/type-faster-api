import { prisma } from "../app";

interface TypingData {
  userId: string;
  textId: string;
  cpm: number;
}

export const progressRepository = {
  async getUserId(email: string) {
    const userId = await prisma.user.findUniqueOrThrow({
      where: { email },
      select: {
        id: true,
      },
    });

    return userId;
  },

  async createHistory(typing: TypingData) {
    const addedTyping = await prisma.history.create({
      data: typing,
      select: {
        cpm: true,
        createAt: true,
        user: {
          select: {
            name: true,
          },
        },
        id: true,
      },
    });

    return addedTyping;
  },

  async getProgress(userId: string) {
    const progress = await prisma.history.findMany({
      where: { userId },
      select: {
        cpm: true,
        createAt: true,
      },

      orderBy: {
        createAt: "desc",
      },

      take: 1000,
    });

    return progress;
  },
};

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
    const addedTyping = await prisma.history.create({ data: typing });

    return addedTyping;
  },
};

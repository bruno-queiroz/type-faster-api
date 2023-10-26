import { prisma } from "../app";

export const historyRepository = {
  async getTop10(textId: string) {
    const top10 = await prisma.history.findMany({
      where: {
        textId,
      },
      select: {
        cpm: true,
        createAt: true,
        user: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        cpm: "desc",
      },
      take: 10,
    });

    return top10;
  },
};

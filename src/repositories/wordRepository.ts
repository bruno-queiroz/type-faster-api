import { Word } from "@prisma/client";
import { prisma } from "../app";

export const wordRepository = {
  async createWord(word: string) {
    const addedWord = await prisma.word.create({
      data: {
        word,
      },
    });

    return addedWord;
  },

  async getWord() {
    const word: Word[] =
      await prisma.$queryRaw`SELECT * FROM "Word" ORDER BY RANDOM() LIMIT 1`;

    return word;
  },
};

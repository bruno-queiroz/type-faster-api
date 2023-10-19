import { Text } from "@prisma/client";
import { prisma } from "../app";

interface TextData {
  text: string;
  author: string;
  title: string;
  image: string;
}

export const textRepository = {
  async createText(text: TextData) {
    const newText = await prisma.text.create({ data: text });

    return newText;
  },
  async getText() {
    const text: Text[] =
      await prisma.$queryRaw`SELECT * FROM "Text" ORDER BY RANDOM() LIMIT 1`;

    return text;
  },
};

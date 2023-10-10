import { prisma } from "../app";

interface Text {
  text: string;
  author: string;
  title: string;
  image: string;
}

export const textRepository = {
  async createText(text: Text) {
    const newText = await prisma.text.create({ data: text });

    return newText;
  },
};

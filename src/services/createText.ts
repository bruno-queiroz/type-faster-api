import { textRepository } from "../repositories/textRepository";

interface Text {
  text: string;
  title: string;
  author: string;
  image: string;
}

const defaultImage = "https://i.ibb.co/MDpY7RL/No-image-found.jpg";

export const createText = (text: Text) => {
  if (!text.image) {
    text.image = defaultImage;
  }

  const newText = textRepository.createText(text);

  return newText;
};

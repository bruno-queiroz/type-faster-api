import { textRepository } from "../repositories/textRepository";

interface Text {
  text: string;
  title: string;
  author: string;
  image: string;
}
export const createText = (text: Text) => {
  const newText = textRepository.createText(text);

  return newText;
};

import { textRepository } from "../repositories/textRepository";
import { generateRandomNumberOfWords } from "../utils/generateRandomNumberOfWords";

const repeatedWordsImage = "https://i.ibb.co/mJWsTRG/keyboard-icon.png";

export const getRepeatedWords = async () => {
  const word = await textRepository.getWord();
  const repeatedWord = generateRandomNumberOfWords(word[0]?.word);

  const data = {
    text: repeatedWord,
    id: word[0]?.id,
    author: "TypeFaster",
    title: "Repeated Words",
    mode: "repeated-words",
    image: repeatedWordsImage,
  };

  return data;
};

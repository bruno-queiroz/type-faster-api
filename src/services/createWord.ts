import { wordRepository } from "../repositories/wordRepository";

export const createWord = async (word: string) => {
  const addedWord = await wordRepository.createWord(word);

  return addedWord;
};

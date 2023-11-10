export const generateRandomNumberOfWords = (word: string) => {
  const repeatedWord: string[] = [];

  for (let i = 0; i < 15 + Math.floor(Math.random() * 10); i++) {
    repeatedWord.push(word);
  }

  return repeatedWord;
};

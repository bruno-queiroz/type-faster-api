export const generateRandomNumberOfWords = (word: string) => {
  const repeatedWord: string[] = [];

  const repetitionAmount = 15 + Math.floor(Math.random() * 10);
  for (let i = 0; i < repetitionAmount; i++) {
    repeatedWord.push(...word.split(""));

    if (i === repetitionAmount - 1) {
      repeatedWord.push(".");
    } else {
      repeatedWord.push(" ");
    }
  }

  return repeatedWord;
};

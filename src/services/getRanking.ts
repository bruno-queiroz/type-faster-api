import { historyRepository } from "../repositories/historyRepository";

export const getRanking = async (textId: string) => {
  const top10 = await historyRepository.getTop10(textId);

  return top10;
};

import { progressRepository } from "../repositories/progressRepository";
import { formatProgressData } from "../utils/formatProgressData";

export const getProgress = async (email: string) => {
  const userId = await progressRepository.getUserId(email);
  const progress = await progressRepository.getProgress(userId.id);

  if (progress.length < 4) {
    return { overallAverageCpm: 0, overallAverageTypos: 0, progress: [] };
  }
  const formattedProgress = formatProgressData(progress);

  return formattedProgress;
};

import { TypingBody } from "../controllers/addProgress";
import { progressRepository } from "../repositories/progressRepository";

export const addProgress = async (typing: TypingBody) => {
  const userId = await progressRepository.getUserId(typing.email);

  const typingData = {
    userId: userId.id,
    cpm: Number(typing.cpm),
    typos: Number(typing.typos),
    textId: typing.textId,
  };

  const addedTyping = await progressRepository.createHistory(typingData);

  return addedTyping;
};

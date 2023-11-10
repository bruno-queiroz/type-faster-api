import { textRepository } from "../repositories/textRepository";

export const getText = async () => {
  const text = await textRepository.getText();
  const formattedText = {
    mode: "traditional",
    ...text[0],
    text: text[0].text.split(""),
  };

  return formattedText;
};

import { format } from "date-fns";

interface ProgressUsefulData {
  cpm: number;
  typos: number;
  createdAt: Date;
}

type ProgressFormattedData = Omit<ProgressUsefulData, "createdAt"> & {
  createdAt: string;
};

export const formatProgressData = (progress: ProgressUsefulData[]) => {
  const data: ProgressFormattedData[] = [];
  const oneQuarter = Math.floor(progress.length / 4);

  let cpmSum = 0;
  let cpmTotalSum = 0;

  let typosSum = 0;
  let typosTotalSum = 0;
  progress.forEach((typing, i) => {
    cpmSum += typing.cpm;
    cpmTotalSum += typing.cpm;

    typosSum += typing.typos;
    typosTotalSum += typing.typos;
    if (i === oneQuarter * (data.length + 1) - 1) {
      const initialDate = progress[data.length * oneQuarter].createdAt;

      data.push({
        cpm: Math.trunc(cpmSum / oneQuarter),
        createdAt: format(initialDate, "MMM/dd/yy"),
        typos: Math.trunc(typosSum / oneQuarter),
      });

      cpmSum = 0;
      typosSum = 0;
    }
  });

  const overallAverageCpm = Math.trunc(cpmTotalSum / progress.length);
  const overallAverageTypos = Math.trunc(typosTotalSum / progress.length);

  return { overallAverageCpm, overallAverageTypos, progress: data };
};

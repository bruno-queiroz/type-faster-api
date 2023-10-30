interface Progress {
  cpm: number;
  createdAt: Date;
}

export const formatProgressData = (progress: Progress[]) => {
  const data: Progress[] = [];
  const oneQuarter = Math.floor(progress.length / 4);

  let cpmSum = 0;
  let cpmTotalSum = 0;
  progress.forEach((typing, i) => {
    cpmSum += typing.cpm;
    cpmTotalSum += typing.cpm;
    if (i === oneQuarter * (data.length + 1) - 1) {
      const initialDate = progress[data.length * oneQuarter].createdAt;

      data.push({
        cpm: cpmSum / oneQuarter,
        createdAt: initialDate,
      });

      cpmSum = 0;
    }
  });

  const overallAverageCpm = cpmTotalSum / progress.length;

  return { overallAverageCpm, progress: data };
};

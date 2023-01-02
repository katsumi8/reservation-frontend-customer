import dayjs from "dayjs";

export const startOfDateFinder = (): Date => {
  const today = new Date();
  if (today.getDay() === 1 || today.getDay() === 2) {
    if (today.getDay() === 1) return dayjs(new Date()).add(2, "days").toDate();
    if (today.getDay() === 2) return dayjs(new Date()).add(1, "days").toDate();
  }
  return today;
};

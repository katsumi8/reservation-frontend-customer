import dayjs from "dayjs";
import { useMemo } from "react";

export const useStartOfDateFinder = () => {
  const startDate = useMemo(() => {
    const today = new Date();

    if (today.getDay() === 1) return dayjs(new Date()).add(2, "days").toDate();
    if (today.getDay() === 2) return dayjs(new Date()).add(1, "days").toDate();

    return today;
  }, []);

  return { startDate };
};

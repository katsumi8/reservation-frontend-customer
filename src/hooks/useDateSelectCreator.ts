import { useSelector } from "@/contexts/store";
import { useDispatch } from "react-redux";
import { selectDate } from "@/contexts/slices/dateAndTimeSlice";
import { useStartOfDateFinder } from "@/hooks/useStartOfDateFinder";
import { useEffect } from "react";

export const useDateSelectCreator = () => {
  const { startDate } = useStartOfDateFinder();
  const selectedDate = useSelector((state) => state.timeAndSlot.date);
  const dispatch = useDispatch();

  const onChangeHandler = (e: Date | null) => {
    dispatch(selectDate(e));
  };

  useEffect(() => {
    dispatch(selectDate(startDate));
  }, []);

  return { selectedDate, onChangeHandler };
};

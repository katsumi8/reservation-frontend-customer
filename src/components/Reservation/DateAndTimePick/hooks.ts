import { useSelector } from "@/contexts/store";
import { useDispatch } from "react-redux";
import { selectDate } from "@/contexts/slices/dateAndTimeSlice";

export const useDateSelectCreator = () => {
  const selectedDate = useSelector((state) => state.timeAndSlot.date);
  const dispatch = useDispatch();

  const onChangeHandler = (e: Date | null) => {
    dispatch(selectDate(e));
  };

  return { selectedDate, onChangeHandler };
};

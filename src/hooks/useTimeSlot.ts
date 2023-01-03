import {
  bookingOpenHour,
  bookingCloseHour,
  minOptions,
} from "@/const/openingHours";
import { useEffect, useMemo } from "react";

export const useTimeSlot = () => {
  const options = useMemo(() => {
    // 対象の時刻を作成①
    const hourOptions: string[] = [];
    // list all possible options with hours and mins
    const timeSlotDropdownAll: string[] = [];
    for (let i = bookingOpenHour; i < bookingCloseHour; i++) {
      hourOptions.push(i.toString() + " : ");
    }
    for (var i = 0; i < hourOptions.length; i++) {
      for (var j = 0; j < minOptions.length; j++) {
        timeSlotDropdownAll.push(hourOptions[i] + minOptions[j]);
      }
    }
    return timeSlotDropdownAll;
  }, []);

  const currentSlot = useMemo(() => {
    // Take a current slot
    const newDate = new Date();
    let hour = newDate.getHours();
    let mins: string | number = newDate.getMinutes();
    if (mins < 15) {
      mins = "30";
    } else if (mins < 30) {
      mins = "45";
    } else if (mins < 45) {
      mins = "00";
      hour++;
    } else {
      mins = "15";
      hour++;
    }
    // 予約最終時間を取得
    const hourString = `${hour < 10 ? `0${hour}` : `${hour}`}`;

    return `${hourString} : ${mins}`;
  }, []);

  return { currentSlot, options };
};

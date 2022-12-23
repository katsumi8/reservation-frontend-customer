// Take a current slot
const newDate = new Date();
let hour: string | number = newDate.getHours();
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
hour = `${hour < 10 ? `0${hour}` : `${hour}`}`;
export const currentSlot = `${hour} : ${mins}`;

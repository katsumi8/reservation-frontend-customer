const bookingOpenHour = 10; // when we start taking a booking
const bookingCloseHour = 24; // when we finish taking a booking

// 対象の時刻を作成①
const hourOptions: string[] = [];
for (let i = bookingOpenHour; i < bookingCloseHour; i++) {
  hourOptions.push(i.toString() + " : ");
}
// 15分刻みの時刻を作成②
const minOptions = ["00", "15", "30", "45"];
// 上記2つの結合
const timeSlotDropdownAll: string[] = [];
for (var i = 0; i < hourOptions.length; i++) {
  for (var j = 0; j < minOptions.length; j++) {
    timeSlotDropdownAll.push(hourOptions[i] + minOptions[j]);
  }
}
export default timeSlotDropdownAll;

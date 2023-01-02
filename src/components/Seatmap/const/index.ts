import { Table } from "types/hooksTypes";

const roomData = {
  horizontalLength: 15,
  verticelLength: 15,
};

const tableData5 = {
  id: 1,
  tableName: "101",
  capability: 2,
  isReserved: false,
  position: "4 / 2 / 5 / 3",
  isRounded: false,
  isUnReservable: false,
};
const tableData6 = {
  id: 2,
  tableName: "102",
  capability: 2,
  isReserved: false,
  position: "4 / 4 / 5 / 5",
  isRounded: false,
  isUnReservable: false,
};
const tableData7 = {
  id: Math.random(),
  tableName: "103",
  capability: 2,
  isReserved: false,
  position: "4 / 7 / 5 / 8",
  isRounded: false,
  isUnReservable: false,
};
const tableData8 = {
  id: Math.random(),
  tableName: "104",
  capability: 2,
  isReserved: false,
  position: "4 / 9 / 5 / 10",
  isRounded: false,
  isUnReservable: false,
};
const tableData1 = {
  id: Math.random(),
  tableName: "105",
  capability: 3,
  isReserved: false,
  position: "2 / 1 / 4 / 2",
  isRounded: true,
  isUnReservable: false,
};

const tableData2 = {
  id: Math.random(),
  tableName: "106",
  capability: 2,
  isReserved: false,
  position: "2 / 3 / 3 / 4",
  isRounded: false,
  isUnReservable: false,
};

const tableData9 = {
  id: Math.random(),
  tableName: "107",
  capability: 2,
  isReserved: false,
  position: "2 / 5 / 3 / 6",
  isRounded: false,
  isUnReservable: false,
};
const tableData10 = {
  id: Math.random(),
  tableName: "108",
  capability: 2,
  isReserved: false,
  position: "2 / 7 / 3 / 8",
  isRounded: false,
  isUnReservable: false,
};
const tableData11 = {
  id: Math.random(),
  tableName: "109",
  capability: 2,
  isReserved: false,
  position: "2 / 9 / 3 / 10",
  isRounded: false,
  isUnReservable: false,
};
const tableData12 = {
  id: Math.random(),
  tableName: "110",
  capability: 4,
  isReserved: false,
  position: "2 / 11 / 3 / 13",
  isRounded: false,
  isUnReservable: false,
};
const tableData13 = {
  id: Math.random(),
  tableName: "36",
  capability: 2,
  isReserved: false,
  position: "2 / 13 / 3 / 14",
  isRounded: false,
  isUnReservable: false,
};
const tableData14 = {
  id: Math.random(),
  tableName: "1",
  capability: 4,
  isReserved: false,
  position: "6 / 1 / 8 / 2",
  isRounded: false,
  isUnReservable: false,
};

const tableData15 = {
  id: Math.random(),
  tableName: "2",
  capability: 2,
  isReserved: false,
  position: "6 / 3 / 7 / 4",
  isRounded: true,
  isUnReservable: false,
};
const tableData16 = {
  id: Math.random(),
  tableName: "3",
  capability: 4,
  isReserved: false,
  position: "6 / 6 / 7 / 8",
  isRounded: true,
  isUnReservable: false,
};
const tableData17 = {
  id: Math.random(),
  tableName: "4",
  capability: 2,
  isReserved: false,
  position: "8 / 7 / 9 / 8",
  isRounded: false,
  isUnReservable: false,
};
const tableData18 = {
  id: Math.random(),
  tableName: "5",
  capability: 2,
  isReserved: false,
  position: "9 / 7 / 10 / 8",
  isRounded: true,
  isUnReservable: false,
};
const tableData19 = {
  id: Math.random(),
  tableName: "6",
  capability: 2,
  isReserved: false,
  position: "11 / 7 / 12 / 8",
  isRounded: true,
  isUnReservable: false,
};
const tableData20 = {
  id: Math.random(),
  tableName: "7",
  capability: 4,
  isReserved: false,
  position: "13 / 7 / 14 / 9",
  isRounded: false,
  isUnReservable: false,
};
const tableData21 = {
  id: Math.random(),
  tableName: "8",
  capability: 4,
  isReserved: false,
  position: "14 / 7 / 15 / 9",
  isRounded: false,
  isUnReservable: false,
};
const tableData22 = {
  id: Math.random(),
  tableName: "9",
  capability: 2,
  isReserved: false,
  position: "15 / 7 / 16 / 8",
  isRounded: false,
  isUnReservable: false,
};

const tableData3 = {
  id: Math.random(),
  tableName: "10",
  capability: 5,
  isReserved: false,
  position: "11 / 1 / 14 / 2",
  isRounded: false,
  isUnReservable: false,
};

const tableData4 = {
  id: Math.random(),
  tableName: "10",
  capability: 5,
  isReserved: false,
  position: "11 / 1 / 12 / 3",
  isRounded: false,
  isUnReservable: false,
};

const tableData23 = {
  id: Math.random(),
  tableName: "11",
  capability: 2,
  isReserved: true,
  position: "15 / 1 / 16 / 2",
  isRounded: true,
  isUnReservable: false,
};
const tableData24 = {
  id: Math.random(),
  tableName: "0",
  capability: 0,
  isReserved: true,
  position: "9 / 1 / 10 / 3",
  isRounded: true,
  isUnReservable: false,
};

const tableData25 = {
  id: Math.random(),
  tableName: "777",
  capability: 0,
  isReserved: true,
  position: "9 / 3 / 10 / 4",
  isRounded: true,
  isUnReservable: false,
};

const tableData26 = {
  id: Math.random(),
  tableName: "666",
  capability: 3,
  isReserved: true,
  position: "9 / 5 / 10 / 6",
  isRounded: true,
  isUnReservable: false,
};

const tableData = [
  tableData1,
  tableData2,
  tableData3,
  tableData4,
  tableData5,
  tableData6,
  tableData7,
  tableData8,
  tableData9,
  tableData10,
  tableData11,
  tableData12,
  tableData13,
  tableData14,
  tableData15,
  tableData16,
  tableData17,
  tableData18,
  tableData19,
  tableData20,
  tableData21,
  tableData22,
  tableData23,
  tableData24,
  tableData25,
  tableData26,
];
const tableDataInside = [
  tableData3,
  tableData4,
  tableData14,
  tableData15,
  tableData16,
  tableData17,
  tableData18,
  tableData19,
  tableData20,
  tableData21,
  tableData22,
  tableData23,
  tableData24,
  tableData25,
  tableData26,
];

const tableDataTerrace = [
  tableData1,
  tableData2,
  tableData5,
  tableData6,
  tableData7,
  tableData8,
  tableData9,
  tableData10,
  tableData11,
  tableData12,
  tableData13,
];
export { tableData, tableDataInside, tableDataTerrace };

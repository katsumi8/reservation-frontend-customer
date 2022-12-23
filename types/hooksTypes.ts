// SeatMap page main

export type tableInputState = {
  id: number;
  tableName: string;
  isReserved: boolean;
};


export type Table = {
  id: string;
  tableName: string;
  capability: string;
  isReserved: boolean;
  position: string;
  isRounded: boolean;
  isUnReservable: boolean;
};
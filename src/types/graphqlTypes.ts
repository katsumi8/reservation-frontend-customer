import { TimeInput } from "@mantine/dates";

export type TimeInput = {
  date: string;
  timeSlot: string;
};

export type UserInput = {
  user: {
    name: string;
    email: string;
    phoneNo: string;
  };
};

export type ReservationCreateVariables = {
  reservation: {
    tableId?: number;
    PplNo: number;
    time: TimeInput;
    userInput: UserInput["user"];
    description: string;
  };
};

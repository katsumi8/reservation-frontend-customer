import { SharedButtonProps } from "@mantine/core";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import type { ReactNode } from "react";
import { Table } from "./hooksTypes";

export type dropdownTypes = {
  timeSlotDropdownList: string[];
};

export type propTableType = {
  tableData: Table[];
};

// ①childrenが必須なパターン
export type propsChildren = {
  children: ReactNode;
};

export type UIHeaderPropsType = {
  children: ReactNode;
  title: string;
};

export type UIButtonPropsType = {
  primaryLabel: string;
  secondaryLabel?: string;
  buttonType: SharedButtonProps["type"];
  pathNames?: string[];
  secondaryButtonType?: SharedButtonProps["type"];
};

export type TitleProp = { title: string };

export type TimeSlotPresenterProps = {
  timeSlot: string;
  dispatch: Dispatch<AnyAction>;
  timeSlotDropdownList: string[];
};

export type ReservationPresenterProps = {
  title: string;
  timeSlotDropdown: string[];
  customerInputComment: string;
  buttonLabel: string;
  descriptionDispatcher: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  submitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
};

export type NoOfGuestsPresenterProps = {
  customerNumber:string
  dispatch: Dispatch<AnyAction>
}

export type DateAndTimePickPresenterProps = {
  selectedDate: Date;
  onChangeHandler: (e: Date | null) => void;
  startOfCalender: Date;
  timeSlotDropdownList: string[];
};

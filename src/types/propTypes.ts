import { ApolloError } from "@apollo/client";
import { SharedButtonProps } from "@mantine/core";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import type { ReactNode } from "react";
import { Table, tableInputState } from "./hooksTypes";

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
  customerNumber: string;
  dispatch: Dispatch<AnyAction>;
};

export type DateAndTimePickPresenterProps = {
  selectedDate: Date;
  onChangeHandler: (e: Date | null) => void;
  startOfCalender: Date;
  timeSlotDropdownList: string[];
};

export type ProfileInfoPresenterProps = {
  title: string;
  firstNameProps: {
    value: any;
    onChange(event: any): void;
    error?: React.ReactNode;
  };
  lastNameProps: {
    value: any;
    onChange(event: any): void;
    error?: React.ReactNode;
  };
  emailProps: {
    value: any;
    onChange(event: any): void;
    error?: React.ReactNode;
  };
  phoneNumberProps: {
    value: any;
    onChange(event: any): void;
    error?: React.ReactNode;
  };
  termsOfServiceProps: {
    checked: boolean;
    onChange(event: any): void;
    error?: React.ReactNode;
  };
  inputStyle: {
    boxShadow: string;
    height: string;
    color: string;
    fontSize: string;
    width: string;
    fontFamily: string;
  };
  phoneNumberError: React.ReactNode;
  onFocusPhoneHandler: (_e: React.FocusEvent<HTMLElement, Element>) => void;
  onBlurPhoneHandler: (_e: React.FocusEvent<HTMLElement, Element>) => void;
  submitHandler: (event?: React.FormEvent<Element> | undefined) => void;
};

export type DisplayReservationInfoPresenterProps = {
  description: string;
  enteredGuests: number;
  reservedDate: string;
  time: string;
};

export type TableGridPresenterProps = {
  tableData: Table[];
  getColor: ({
    isReserved,
    id,
  }: tableInputState) => "#99d98c" | "#6c757d" | "#caf0f8";
  selectHandler: (
    tableData: Table[],
    { isReserved, id }: tableInputState
  ) => void;
  doubleIdChecker: (
    tableName: string,
    index: number,
    tableData: Table[]
  ) => string;
};

export type SeatMapPresenterProps = {
  loading: boolean;
  error: ApolloError | undefined;
  title: string;
  seatmap: Table[];
};

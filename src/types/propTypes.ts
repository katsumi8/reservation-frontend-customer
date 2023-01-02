import { SharedButtonProps } from "@mantine/core";
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



import { Header } from "@mantine/core";
import React from "react";
import type { UIHeaderPropsType } from "types/propTypes";

function AllHeader(props: UIHeaderPropsType) {
  return (
    <Header
      height={60}
      p="xs"
      styles={{ root: { backgroundColor: "#c0e5ed" } }}
    >
      <p>{props.title}</p>
      {props.children}
    </Header>
  );
}

export default AllHeader;

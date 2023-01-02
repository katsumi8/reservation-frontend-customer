import { Card } from "@mantine/core";
import React from "react";
import type { propsChildren } from "@/types/propTypes";

function CardDisplay(props: propsChildren) {
  return (
    <div style={{ width: "auto", margin: "auto" }}>
      <Card shadow="sm" p="lg" style={{ marginBottom: "20px" }}>
        {props.children}
      </Card>
    </div>
  );
}

export default CardDisplay;

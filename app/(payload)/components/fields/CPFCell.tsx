"use client";

import { DefaultCell } from "@payloadcms/ui";
import { ClientField, DefaultServerCellComponentProps } from "payload";
import React from "react";

const CPFCell = (props: DefaultServerCellComponentProps) => {
  const { cellData } = props;
  const formatCPF = (value?: string) => {
    if (!value) return "";

    const cleaned = value.replace(/\D/g, "");

    return cleaned
      .slice(0, 11)
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  };

  return (
    <DefaultCell
      {...props}
      field={props.field as unknown as ClientField}
      cellData={formatCPF(typeof cellData === "string" ? cellData : "")}
    />
  );
};

export default CPFCell;

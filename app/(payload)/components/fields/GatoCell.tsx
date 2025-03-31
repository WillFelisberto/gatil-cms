"use client";

import React from "react";
import { DefaultCell } from "@payloadcms/ui";
import type { DefaultCellComponentProps } from "payload";

const GatoCell = (props: DefaultCellComponentProps) => {
  const { rowData } = props;
  const isProjetoInteiro = rowData?.apadrinhaProjeto === true;

  if (isProjetoInteiro) {
    return <div style={{ padding: "0.25rem 0.5rem" }}>🐾 Projeto Inteiro</div>;
  }

  // ✅ Caso contrário, renderiza normalmente com o DefaultCell
  return <DefaultCell {...props} field={props.field as any} />;
};

export default GatoCell;

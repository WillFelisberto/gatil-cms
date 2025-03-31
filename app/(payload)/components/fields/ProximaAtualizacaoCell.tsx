// components/ProximaAtualizacaoCell.tsx
"use client";

import React from "react";
import { DefaultCell } from "@payloadcms/ui";
import { DefaultCellComponentProps } from "payload";

const ProximaAtualizacaoCell: React.FC<DefaultCellComponentProps> = (props) => {
  const { cellData } = props;
  const proximaAtualizacao = new Date(cellData);
  const hoje = new Date();

  const isAtrasado = proximaAtualizacao < hoje;

  return (
    <div className={isAtrasado ? "linha-atrasada" : ""}>
      <DefaultCell {...props} />
    </div>
  );
};

export default ProximaAtualizacaoCell;

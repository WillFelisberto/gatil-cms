'use client';

import React from 'react';
import { DefaultCell } from '@payloadcms/ui';
import type { DefaultCellComponentProps } from 'payload';

const GatoCell = (props: DefaultCellComponentProps) => {
  const { rowData } = props;
  const isProjetoInteiro = rowData?.apadrinhaProjeto === true;

  if (isProjetoInteiro) {
    return (
      <a href={`${process.env.NEXT_PUBLIC_SITE_URL}/admin/collections/sponsorships/${rowData.id}`}>
        🐾 Projeto Inteiro
      </a>
    );
  }

  // ✅ Caso contrário, renderiza normalmente com o DefaultCell
  return <DefaultCell {...props} field={props.field as any} />;
};

export default GatoCell;

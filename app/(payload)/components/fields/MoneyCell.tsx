'use client';

import React from 'react';
import { DefaultCell } from '@payloadcms/ui';
import { ClientField, DefaultServerCellComponentProps } from 'payload';

const MoneyCell = (props: DefaultServerCellComponentProps) => {
  const { cellData } = props;

  const formatCurrency = (val: unknown) => {
    if (typeof val === 'number') {
      return val.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
      });
    }

    return val;
  };

  return (
    <DefaultCell
      {...props}
      field={props.field as unknown as ClientField}
      cellData={formatCurrency(cellData)}
    />
  );
};

export default MoneyCell;

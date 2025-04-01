'use client';

import { DefaultCell } from '@payloadcms/ui';
import { ClientField, DefaultServerCellComponentProps } from 'payload';
import React from 'react';

const PhoneCell = (props: DefaultServerCellComponentProps) => {
  const { cellData } = props;
  const formatPhone = (value?: string) => {
    if (!value) return '';

    const digits = value.replace(/\D/g, '');

    if (digits.length === 11) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
    } else if (digits.length === 10) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    } else {
      return value;
    }
  };

  return (
    <DefaultCell
      {...props}
      field={props.field as unknown as ClientField}
      cellData={formatPhone(typeof cellData === 'string' ? cellData : '')}
    />
  );
};

export default PhoneCell;

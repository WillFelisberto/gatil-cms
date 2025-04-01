'use client';

import React from 'react';
import { useField } from '@payloadcms/ui';
import { IMaskInput } from 'react-imask';

type FieldProps = {
  field: {
    name: string;
    label: string;
    type: string;
    required?: boolean;
  };
  path: string;
  permissions: { read: boolean };
  readOnly: boolean;
};

const MaskedCurrencyField: React.FC<FieldProps> = ({ path, field }) => {
  const { value, setValue, errorMessage } = useField<number>({ path });

  const formattedValue =
    typeof value === 'number'
      ? value.toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })
      : '';

  return (
    <div className="field-type text">
      {field.label && (
        <label htmlFor={path}>
          {field.label}
          {field.required && ' *'}
        </label>
      )}

      <IMaskInput
        id={path}
        name={path}
        className="field-input"
        placeholder="R$ 0,00"
        mask={Number}
        radix=","
        mapToRadix={['.']}
        thousandsSeparator="."
        scale={2}
        normalizeZeros
        padFractionalZeros
        overwrite
        defaultValue={formattedValue}
        onAccept={(val: any) => {
          if (typeof val === 'number') {
            setValue(val);
          } else if (typeof val === 'string') {
            const clean = val.replace(/\./g, '').replace(',', '.');
            const parsed = parseFloat(clean);
            if (!isNaN(parsed)) {
              setValue(parsed);
            }
          }
        }}
      />

      {errorMessage && <div className="field-error">{errorMessage}</div>}
    </div>
  );
};

export default MaskedCurrencyField;

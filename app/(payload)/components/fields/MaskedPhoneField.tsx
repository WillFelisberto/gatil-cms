'use client';

import { useField } from '@payloadcms/ui';
import React from 'react';
import { IMaskInput } from 'react-imask';

type FieldProps = {
  field: {
    name: string;
    label: string;
    type: string;
    required?: boolean;
    description?: string;
  };
  path: string;
  permissions: { read: boolean };
  readOnly: boolean;
};

const MaskedPhoneField: React.FC<FieldProps> = (props) => {
  const { path, field } = props;

  const { value, setValue, errorMessage } = useField<string>({
    path
  });

  return (
    <div className="field-type text">
      {field.label && (
        <label htmlFor={path}>
          {field.label}
          {field.required && ' *'}
        </label>
      )}

      {field.description && <div className="field-description">{field.description}</div>}

      <IMaskInput
        id={path}
        name={path}
        mask="(00) 00000-0000"
        overwrite
        lazy={false} // força a exibir a máscara logo de cara
        value={value || ''}
        onAccept={(val: string) => setValue(val)}
        className="field-input"
      />

      {errorMessage && <div className="field-error">{errorMessage}</div>}
    </div>
  );
};

export default MaskedPhoneField;

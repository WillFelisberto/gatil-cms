"use client";

import React from "react";
import { useField } from "@payloadcms/ui";
import { IMaskInput } from "react-imask";

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

const MaskedCpfField: React.FC<FieldProps> = ({
  path,
  field,
  permissions,
  readOnly,
}) => {
  const { value, setValue, errorMessage } = useField<string>({ path });

  const handleAccept = (value: string, mask: any) => {
    setValue(mask.unmaskedValue);
  };
  const mask = "000.000.000-00";

  return (
    <div className="field-type text">
      {field.label && (
        <label htmlFor={path}>
          {field.label}
          {field.required && " *"}
        </label>
      )}

      <IMaskInput
        id={path}
        name={path}
        className={`field-input ${errorMessage ? "error" : ""}`}
        placeholder="CPF  "
        value={value || ""}
        onAccept={handleAccept}
        lazy={false}
        overwrite
        mask={mask}
        inputMode="numeric"
        required={field.required}
        definitions={{
          "#": /[0-9]/,
        }}
      />

      {errorMessage && <div className="field-error">{errorMessage}</div>}
    </div>
  );
};

export default MaskedCpfField;

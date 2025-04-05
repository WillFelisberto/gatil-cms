'use client';

import React from 'react';
import {
  differenceInYears,
  differenceInMonths,
  differenceInWeeks,
  differenceInDays
} from 'date-fns';
import { useField } from '@payloadcms/ui';

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

const GetPreviewField: React.FC<FieldProps> = () => {
  const { value: birthDate } = useField<string>({ path: 'birthDate' });

  const formatAge = (dateString: string | undefined): string => {
    if (!dateString) return 'Data não definida';

    const date = new Date(dateString);
    const now = new Date();

    const years = differenceInYears(now, date);
    if (years > 0) return `${years} ano${years > 1 ? 's' : ''}`;

    const months = differenceInMonths(now, date);
    if (months > 0) return `${months} mês${months > 1 ? 'es' : ''}`;

    const weeks = differenceInWeeks(now, date);
    if (weeks > 0) return `${weeks} semana${weeks > 1 ? 's' : ''}`;

    const days = differenceInDays(now, date);
    return `${days} dia${days > 1 ? 's' : ''}`;
  };

  return (
    <div style={{ marginTop: '1rem', opacity: 0.8 }}>
      <label className="field-label">Idade Estimada</label>
      <div>{formatAge(birthDate)}</div>
    </div>
  );
};

export default GetPreviewField;

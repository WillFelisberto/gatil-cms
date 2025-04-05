import React from 'react';
import {
  differenceInYears,
  differenceInMonths,
  differenceInWeeks,
  differenceInDays
} from 'date-fns';
import { DefaultCellComponentProps } from 'payload';

const AgeCell = (props: DefaultCellComponentProps) => {
  const { rowData } = props;
  console.log('🚀 ~ AgeCell ~ cellData:', rowData.birthDate);
  if (!rowData.birthDate) return <span>-</span>;

  const date = new Date(rowData.birthDate);
  const now = new Date();

  const years = differenceInYears(now, date);
  if (years > 0)
    return (
      <span>
        {years} ano{years > 1 ? 's' : ''}
      </span>
    );

  const months = differenceInMonths(now, date);
  if (months > 0)
    return (
      <span>
        {months} mês{months > 1 ? 'es' : ''}
      </span>
    );

  const weeks = differenceInWeeks(now, date);
  if (weeks > 0)
    return (
      <span>
        {weeks} semana{weeks > 1 ? 's' : ''}
      </span>
    );

  const days = differenceInDays(now, date);
  return (
    <span>
      {days} dia{days > 1 ? 's' : ''}
    </span>
  );
};

export default AgeCell;

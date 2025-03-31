import { addDays } from "date-fns";
import { BeforeChangeHook } from "node_modules/payload/dist/collections/config/types";

export const generateNextUpdateDate: BeforeChangeHook = ({ data }) => {
  if (data?.dataAtualizacao) {
    const newDate = new Date(data.dataAtualizacao);
    newDate.setHours(0, 0, 0, 0);
    return {
      ...data,
      proximaAtualizacao: addDays(newDate, 7),
    };
  }

  return data;
};

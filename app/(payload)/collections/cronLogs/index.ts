import { checkRole } from "app/(payload)/access/utils";
import { CollectionConfig } from "payload";

const CronLogs: CollectionConfig = {
  slug: "cronLogs",
  labels: {
    singular: "Log de Cron",
    plural: "Logs de Cron",
  },
  admin: {
    useAsTitle: "executadoEm",
    defaultColumns: ["executadoEm", "totalVencidos", "emailEnviado"],
  },
  access: {
    read: ({ req: { user } }) => {
      return user ? checkRole("admin", user) : false;
    },
    create: () => false,
    update: () => false,
    delete: () => false,
  },
  fields: [
    {
      name: "executadoEm",
      label: "Executado em",
      type: "date",
      admin: {
        readOnly: true,
        date: {
          displayFormat: "dd/MM/yyyy",
        },
      },
    },
    {
      name: "totalVencidos",
      label: "Total de apadrinhamentos vencidos",
      type: "number",
      admin: {
        readOnly: true,
      },
    },
    {
      name: "emailEnviado",
      label: "Email enviado?",
      type: "checkbox",
      admin: {
        readOnly: true,
      },
    },
    {
      name: "mensagem",
      label: "Mensagem adicional",
      type: "textarea",
      admin: {
        readOnly: true,
      },
    },
  ],
};

export default CronLogs;

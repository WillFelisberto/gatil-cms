import WhatsappCell from "app/(payload)/components/fields/WhatsappCell";
import { CollectionConfig } from "payload";

const Guardians: CollectionConfig = {
  slug: "guardians",
  labels: {
    singular: "Tutor",
    plural: "Tutores",
  },
  admin: {
    useAsTitle: "nome",
    group: "Conteúdo",
    defaultColumns: ["nome", "telefone", "whatsapp"],
  },
  fields: [
    {
      name: "nome",
      label: "Nome completo",
      type: "text",
      required: true,
    },
    {
      name: "email",
      label: "E-mail",
      type: "email",
      required: true,
    },
    {
      name: "telefone",
      label: "Telefone",
      required: true,
      type: "text",
      admin: {
        components: {
          Field: "app/(payload)/components/fields/MaskedPhoneField",
          Cell: "app/(payload)/components/fields/PhoneCell",
        },
      },
    },
    {
      name: "document",
      label: "CPF ou CNPJ",
      type: "text",
      admin: {
        components: {
          Field: "app/(payload)/components/fields/MaskedCpfField",
          Cell: "app/(payload)/components/fields/CPFCell",
        },
      },
    },
    {
      name: "endereco",
      label: "Endereço",
      type: "text",
    },
    {
      name: "whatsapp",
      label: "Contato rápido",
      type: "text",
      admin: {
        components: {
          Cell: "app/(payload)/components/fields/WhatsappCell",
        },
      },
      access: {
        create: () => false,
        update: () => false,
      },
    },
  ],
};

export default Guardians;

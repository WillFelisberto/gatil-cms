import { CollectionConfig } from "payload";

const Sponsorships: CollectionConfig = {
  slug: "sponsorships",
  labels: {
    plural: "Apadrinhamentos",
    singular: "Apadrinhamento",
  },
  admin: {
    useAsTitle: "gato",
    group: "Conteúdo",
  },
  fields: [
    {
      name: "gato",
      label: "Gato apadrinhado",
      type: "relationship",
      relationTo: "cats",
      required: true,
    },
    {
      name: "padrinho",
      label: "Padrinho",
      type: "relationship",
      relationTo: "guardians",
      required: true,
    },
    {
      name: "valorMensal",
      label: "Valor mensal (R$)",
      type: "number",
      required: true,
    },
    {
      name: "dataInicio",
      label: "Data de início",
      type: "date",
    },
    {
      name: "ativo",
      label: "Apadrinhamento ativo?",
      type: "checkbox",
      defaultValue: true,
    },
  ],
};

export default Sponsorships;

import { checkRole } from "app/(payload)/access/utils";
import { CollectionConfig } from "payload";

const Users: CollectionConfig = {
  slug: "users",
  labels: {
    plural: "Usuários",
    singular: "Usuário",
  },
  auth: true, // 🔐 Ativa autenticação
  admin: {
    useAsTitle: "name",
    group: "Conteúdo",
  },
  fields: [
    {
      name: "name",
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
      type: "text",
    },
    {
      name: "photo",
      label: "Foto",
      type: "upload",
      relationTo: "media",
    },
    {
      access: {
        read: () => true,
        update: ({ req: { user } }) => {
          return user ? checkRole("admin", user) : false;
        },
      },
      name: "role",
      label: "Cargo",
      type: "select",
      required: true,
      options: [
        { label: "Admin", value: "admin" },
        { label: "Voluntário", value: "voluntario" },
      ],
      defaultValue: "voluntario",
    },
  ],
};

export default Users;

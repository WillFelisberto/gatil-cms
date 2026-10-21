import { GlobalConfig } from 'payload';
import { checkRole } from '../../access/utils';
import { PageBlocks } from '../../blocks';

const Colabore: GlobalConfig = {
  slug: 'colabore',
  label: 'Doações · PIX e dados bancários',
  admin: {
    group: 'Conteúdo do site'
  },
  hooks: {},
  access: {
    read: ({ req: { user } }) => (user ? checkRole('admin', user) : false),
    update: ({ req: { user } }) => (user ? checkRole('admin', user) : false)
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'PIX',
          fields: [
            {
              name: 'qrcode',
              label: 'QR code do PIX',
              type: 'upload',
              relationTo: 'media',
              required: false
            },
            {
              name: 'chavesPix',
              label: 'Chaves PIX',
              type: 'array',
              fields: [
                {
                  name: 'tipo',
                  label: 'Tipo da chave',
                  type: 'select',
                  options: [
                    { label: 'CNPJ', value: 'cnpj' },
                    { label: 'E-mail', value: 'email' },
                    { label: 'Banco', value: 'bank' },
                    { label: 'Telefone', value: 'phone' },
                    { label: 'CPF', value: 'cpf' },
                    { label: 'Outro', value: 'other' }
                  ]
                },
                {
                  name: 'valor',
                  label: 'Valor da chave',
                  type: 'text'
                }
              ],
              required: false,
              minRows: 0,
              maxRows: 3
            }
          ]
        },
        {
          label: 'Dados bancários',
          fields: [
            {
              name: 'logobanco',
              label: 'Logo do banco',
              type: 'upload',
              relationTo: 'media',
              required: true
            },
            {
              name: 'dadosBancarios',
              label: 'Dados Bancários',
              type: 'group',
              fields: [
                {
                  name: 'banco',
                  label: 'Banco',
                  type: 'text'
                },
                {
                  name: 'agencia',
                  label: 'Agência',
                  type: 'text'
                },
                {
                  name: 'contaCorrente',
                  label: 'Conta Corrente',
                  type: 'text'
                },
                {
                  name: 'favorecido',
                  label: 'Favorecido',
                  type: 'text'
                }
              ],
              required: false
            }
          ]
        }
      ]
    },
    {
      name: 'layout', type: 'blocks', required: false, blocks: PageBlocks,
      admin: { condition: () => false, description: 'Conteúdo antigo conservado no banco, não usado na landing.' }
    }
  ]
};

export default Colabore;

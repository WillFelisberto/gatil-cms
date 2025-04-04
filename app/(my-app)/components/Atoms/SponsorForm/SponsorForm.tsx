'use client';

import { Controller, useForm } from 'react-hook-form';
import { IMaskInput } from 'react-imask';
import { toast } from 'react-toastify';

import { Cat } from '@/payload-types';

type SponsorFormData = {
  padrinhoNome: string;
  padrinhoEmail: string;
  whatsapp: string;
  valorMensal: string;
  formaPagamento: string;
  certificadoDigital?: boolean;
  visitas?: boolean;
  aceitaTermos: boolean;
};

type SponsorFormProps = {
  cat: Cat;
  onSuccess(): void;
};

export const SponsorForm = ({ cat, onSuccess }: SponsorFormProps) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<SponsorFormData>();

  const onSubmit = async (data: SponsorFormData) => {
    try {
      const res = await fetch('/api/create-sponsorships', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.CRON_SECRET || ''
        },
        body: JSON.stringify({
          gato: cat.id,
          gatoNome: cat.nome,
          whatsapp: data.whatsapp,
          valorMensal: data.valorMensal,
          formaPagamento: data.formaPagamento,
          certificadoDigital: data.certificadoDigital,
          visitas: data.visitas,
          aceitaTermos: data.aceitaTermos,
          padrinhoNome: data.padrinhoNome,
          padrinhoEmail: data.padrinhoEmail
        })
      });

      if (!res.ok) throw new Error('Erro ao enviar formulário');
      toast.success('Apadrinhamento enviado com sucesso! 🐾');
      onSuccess();
    } catch {
      toast.error('Erro ao enviar. Tente novamente. 😿');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 bg-white w-full mx-auto"
      data-testid="sponsor-form"
      aria-label="Formulário de apadrinhamento"
    >
      {/* Nome */}
      <div>
        <label htmlFor="padrinhoNome" className="block mb-1 font-semibold text-gray-800">
          Seu nome
        </label>
        <input
          id="padrinhoNome"
          type="text"
          placeholder="Ex: João Vítor"
          aria-invalid={!!errors.padrinhoNome}
          aria-describedby={errors.padrinhoNome ? 'padrinhoNome-error' : undefined}
          {...register('padrinhoNome', { required: 'Informe seu nome' })}
          className={`w-full p-2 border rounded-md focus:ring-2 focus:outline-none ${
            errors.padrinhoNome ? 'border-red-500' : 'border-gray-300'
          }`}
          data-testid="input-nome"
        />
        {errors.padrinhoNome && (
          <p id="padrinhoNome-error" className="text-red-500 text-sm mt-1">
            {errors.padrinhoNome.message}
          </p>
        )}
      </div>

      {/* WhatsApp */}
      <div>
        <label htmlFor="whatsapp" className="block mb-1 font-semibold text-gray-800">
          WhatsApp
        </label>
        <Controller
          name="whatsapp"
          control={control}
          rules={{ required: 'Informe seu número de WhatsApp' }}
          render={({ field }) => (
            <IMaskInput
              id="whatsapp"
              {...field}
              mask="(00) 00000-0000"
              unmask={true}
              placeholder="(00) 00000-0000"
              className={`w-full p-2 border rounded-md focus:ring-2 focus:outline-none ${
                errors.whatsapp ? 'border-red-500' : 'border-gray-300'
              }`}
              aria-invalid={!!errors.whatsapp}
              aria-describedby={errors.whatsapp ? 'whatsapp-error' : undefined}
              data-testid="input-whatsapp"
            />
          )}
        />
        {errors.whatsapp && (
          <p id="whatsapp-error" className="text-red-500 text-sm mt-1">
            {errors.whatsapp.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="padrinhoEmail" className="block mb-1 font-semibold text-gray-800">
          Seu email
        </label>
        <input
          id="padrinhoEmail"
          type="email"
          placeholder="seuemail@exemplo.com"
          {...register('padrinhoEmail', { required: 'Informe seu email' })}
          className={`w-full p-2 border rounded-md focus:ring-2 focus:outline-none ${
            errors.padrinhoEmail ? 'border-red-500' : 'border-gray-300'
          }`}
          aria-invalid={!!errors.padrinhoEmail}
          aria-describedby={errors.padrinhoEmail ? 'email-error' : undefined}
          data-testid="input-email"
        />
        {errors.padrinhoEmail && (
          <p id="email-error" className="text-red-500 text-sm mt-1">
            {errors.padrinhoEmail.message}
          </p>
        )}
      </div>

      {/* Plano */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:gap-4">
        <label htmlFor="valorMensal" className="font-semibold text-gray-800 min-w-[180px]">
          Plano de contribuição
        </label>
        <div className="flex flex-col flex-1">
          <select
            id="valorMensal"
            {...register('valorMensal', { required: 'Selecione um plano de contribuição' })}
            className={`p-2 border rounded-md focus:ring-2 focus:outline-none ${
              errors.valorMensal ? 'border-red-500' : 'border-gray-300'
            }`}
            data-testid="select-plano"
            aria-invalid={!!errors.valorMensal}
          >
            <option value="">Selecione um plano</option>
            <option value="R$ 29,90 (Básico)">R$ 29,90 (Básico)</option>
            <option value="R$ 59,90 (Premium)">R$ 59,90 (Premium)</option>
            <option value="R$ 99,90 (Master)">R$ 99,90 (Master)</option>
          </select>
          {errors.valorMensal && (
            <p className="text-red-500 text-sm mt-1">{errors.valorMensal.message}</p>
          )}
        </div>
      </div>

      {/* Pagamento */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:gap-4">
        <label htmlFor="formaPagamento" className="font-semibold text-gray-800 min-w-[180px]">
          Forma de pagamento
        </label>
        <div className="flex flex-col flex-1">
          <select
            id="formaPagamento"
            {...register('formaPagamento', { required: 'Selecione a forma de pagamento' })}
            className={`p-2 border rounded-md focus:ring-2 focus:outline-none ${
              errors.formaPagamento ? 'border-red-500' : 'border-gray-300'
            }`}
            data-testid="select-pagamento"
            aria-invalid={!!errors.formaPagamento}
          >
            <option value="">Selecione</option>
            <option value="Pix">Pix</option>
            <option value="Dinheiro">Dinheiro</option>
          </select>
          {errors.formaPagamento && (
            <p className="text-red-500 text-sm mt-1">{errors.formaPagamento.message}</p>
          )}
        </div>
      </div>

      {/* Checkboxes */}
      <div className="space-y-3">
        <label className="flex items-center gap-2 text-gray-700">
          <input
            type="checkbox"
            {...register('certificadoDigital')}
            data-testid="checkbox-certificado"
          />
          Deseja receber certificado digital?
        </label>

        <label className="flex items-center gap-2 text-gray-700">
          <input type="checkbox" {...register('visitas')} data-testid="checkbox-visitas" />
          Gostaria de participar de eventos ou visitas?
        </label>

        <label className="flex items-center gap-2 text-gray-700">
          <input
            type="checkbox"
            {...register('aceitaTermos', { required: true })}
            aria-invalid={!!errors.aceitaTermos}
            data-testid="checkbox-termos"
          />
          <span>
            Li e aceito os{' '}
            <a
              href="/termos-de-apadrinhamento"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#013274] hover:text-[#012050]"
            >
              termos de apadrinhamento
            </a>
          </span>
        </label>
        {errors.aceitaTermos && (
          <p className="text-red-500 text-sm mt-1">É necessário aceitar os termos</p>
        )}
      </div>

      {/* Botão de envio */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#013274] text-white font-semibold py-2 rounded-md hover:bg-[#012050] transition"
        data-testid="submit-button"
      >
        {isSubmitting ? 'Enviando...' : 'Apadrinhar agora'}
      </button>
    </form>
  );
};

import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';

import { formatPhoneNumber } from '@/utils/phoneFormatter';

interface VolunteerCardProps {
  photo: string;
  name: string;
  phone?: string;
  showPhone?: boolean;
}

export const VolunteerCard = ({ photo, name, phone, showPhone }: VolunteerCardProps) => {
  return (
    <div
      className="
        flex flex-col items-center text-center rounded-2xl shadow-lg p-4 bg-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl w-full max-w-[180px] sm:w-[180px] justify-between"
      data-testid="volunteer-card"
    >
      <Image
        src={photo}
        alt={`Foto de ${name}`}
        width={96}
        height={96}
        className="w-24 h-24 rounded-full object-cover border-4 border-blue-950 mb-3"
      />
      <h3 className="text-lg font-semibold text-zinc-800">{name}</h3>

      {phone && showPhone && (
        <a
          href={`https://wa.me/55${phone.replace(/\D/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-medium text-sm text-blue-950  mt-1 hover:underline whitespace-nowrap"
        >
          <FaWhatsapp className="text-lg text-green-600" />
          {formatPhoneNumber(phone)}
        </a>
      )}
    </div>
  );
};

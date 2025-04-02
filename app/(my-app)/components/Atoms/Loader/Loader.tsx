import { PawPrint } from 'lucide-react';

type LoaderProps = {
  text?: string;
};

export const Loader = ({ text }: LoaderProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] gap-4">
      <div className="animate-bounce text-[#013274]">
        <PawPrint className="w-16 h-16" data-testid="paw-icon" />
      </div>
      {text && <p className="text-[#013274] font-semibold text-lg text-center">{text}</p>}
    </div>
  );
};

import * as React from 'react';
import Image from 'next/image';
import { CustomComponent, PayloadComponentProps } from 'payload';

const Icon: React.FC<PayloadComponentProps<CustomComponent>> = () => {
  return (
    <div style={{ maxWidth: '40px', height: 'auto' }}>
      <Image src="/logo-rodape.webp" alt="Logo" width={100} height={100} layout="responsive" />
    </div>
  );
};

export default Icon;

'use client';

import * as React from 'react';
import Image from 'next/image';
import { CustomComponent, PayloadComponentProps } from 'payload';
import { useTheme } from '@payloadcms/ui';

const Logo: React.FC<PayloadComponentProps<CustomComponent>> = () => {
  const { theme } = useTheme();

  return (
    <div>
      <Image
        src={theme === 'dark' ? '/logo-gatil-dark.png' : '/logo-gatil-light.png'}
        alt="Logo"
        width={100}
        height={100}
        layout="responsive"
      />
    </div>
  );
};

export default Logo;

import React, {FC, ReactNode, useEffect, useState} from 'react';
import clsx from 'clsx';
import QrCode from 'qrcode';

interface ComponentProps {
  className?: string;
  margin?: number;
  text: string;
  width?: number;
}

const Qr: FC<ComponentProps> = ({className, margin = 0, text, width = 140}) => {
  const [qr, setQr] = useState<ReactNode | null>(null);

  useEffect(() => {
    const generateQR = async (): Promise<void> => {
      const url = await QrCode.toDataURL(text, {
        color: {
          dark: '#000000',
          light: '#0000',
        },
        margin,
        width,
      });
      setQr(<img alt="QR Code" className={clsx('Qr', className)} src={url} />);
    };

    generateQR();
  }, [className, margin, text, width]);

  return <>{qr}</>;
};

export default Qr;

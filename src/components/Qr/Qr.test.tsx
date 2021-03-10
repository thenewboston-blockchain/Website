import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QrCode from 'qrcode';

import Qr from '.';

jest.mock('qrcode');

const baseProps = {
  text: 'Test',
};

describe('Qr component', () => {
  it('renders without crashing', async () => {
    render(<Qr {...baseProps} />);

    const el = await screen.findByAltText('QR Code');
    expect(el).toBeTruthy();
  });

  it('renders with default className', async () => {
    render(<Qr {...baseProps} className="Test" />);

    const el = await screen.findByAltText('QR Code');
    expect(el).toHaveClass('Qr');
  });

  it('renders with className passed in', async () => {
    render(<Qr {...baseProps} className="Test" />);

    const el = await screen.findByAltText('QR Code');
    expect(el).toHaveClass('Test');
  });

  it('calls QrCode.toDataUrl once', async () => {
    render(<Qr {...baseProps} />);

    await screen.findByAltText('QR Code');
    expect(QrCode.toDataURL).toHaveBeenCalledTimes(1);
  });

  it('calls QrCode.toDataUrl with default properties', async () => {
    render(<Qr {...baseProps} />);

    await screen.findByAltText('QR Code');
    expect(QrCode.toDataURL).toBeCalledWith(baseProps.text, {
      color: {
        dark: '#000000',
        light: '#0000',
      },
      margin: 0,
      width: 140,
    });
  });

  it('calls QrCode.toDataUrl with margin passed in', async () => {
    render(<Qr {...baseProps} margin={10} />);

    await screen.findByAltText('QR Code');
    expect(QrCode.toDataURL).toBeCalledWith(baseProps.text, {
      color: {
        dark: '#000000',
        light: '#0000',
      },
      margin: 10,
      width: 140,
    });
  });

  it('calls QrCode.toDataUrl with width passed in', async () => {
    render(<Qr {...baseProps} width={160} />);

    await screen.findByAltText('QR Code');
    expect(QrCode.toDataURL).toBeCalledWith(baseProps.text, {
      color: {
        dark: '#000000',
        light: '#0000',
      },
      margin: 0,
      width: 160,
    });
  });
});

import React from 'react';
import {HelmetProvider} from 'react-helmet-async';
import {render, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import PageTitle, {defaultOgDescription, defaultOgImageUrl, defaultOgType, defaultOgUrl} from './index';

describe('Page Title component', () => {
  test('renders with text passed in', async () => {
    render(
      <HelmetProvider>
        <PageTitle title="Test" />
      </HelmetProvider>,
    );

    await waitFor(() => expect(document.title).toContain('Test | thenewboston'));
  });

  test('renders with default og meta tags', async () => {
    render(
      <HelmetProvider>
        <PageTitle title="Home" />
      </HelmetProvider>,
    );

    await waitFor(() => {
      expect(document.title).toContain('Home | thenewboston');
      expect((document.querySelector('[property="og:type"]') as HTMLMetaElement).content).toBe(defaultOgType);
      expect((document.querySelector('[property="og:title"]') as HTMLMetaElement).content).toBe('Home | thenewboston');
      expect((document.querySelector('[property="og:description"]') as HTMLMetaElement).content).toBe(
        defaultOgDescription,
      );
      expect((document.querySelector('[property="og:url"]') as HTMLMetaElement).content).toBe(defaultOgUrl);
      expect((document.querySelector('[property="og:image"]') as HTMLMetaElement).content).toBe(defaultOgImageUrl);
    });
  });
});

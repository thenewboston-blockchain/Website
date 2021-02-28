import React from 'react';
import {HelmetProvider} from 'react-helmet-async';
import {render, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import PageTitle from './index';

describe('Page Title component', () => {
  test('renders with text passed in', async () => {
    render(
      <HelmetProvider>
        <PageTitle title="Test" />
      </HelmetProvider>,
    );

    await waitFor(() => expect(document.title).toContain('Test | thenewboston'));
  });
});

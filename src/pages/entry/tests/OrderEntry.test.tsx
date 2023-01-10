import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';

import OrderEntry from '../OrderEntry';
import { server } from '../../../mocks/server';

describe('OrderEntry', () => {
  test('handles error for scoops and toping routes', async () => {
    server.resetHandlers(
      rest.get('http://localhost:3030/scoops', (_, res, ctx) =>
        res(ctx.status(500))
      ),
      rest.get('http://localhost:3030/toppings', (_, res, ctx) =>
        res(ctx.status(500))
      )
    );

    render(<OrderEntry />);

    await waitFor(async () => {
      const alerts = await screen.findAllByRole('alert');
      expect(alerts).toHaveLength(2);
    });
  });
});

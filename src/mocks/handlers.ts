import { rest } from 'msw';
import { Option } from '../utilities/types';

export const handlers = [
  rest.get<Option[]>('http://localhost:3030/scoops', (_, res, ctx) => {
    return res(
      ctx.json([
        {
          name: 'Chocolate',
          imagePath: '/images/chocolate.png',
        },
        {
          name: 'Vanilla',
          imagePath: '/images/vanilla.png',
        },
      ])
    );
  }),
  rest.get<Option[]>('http://localhost:3030/toppings', (_, res, ctx) => {
    return res(
      ctx.json([
        {
          name: 'Cherries',
          imagePath: '/images/cherries.png',
        },
        {
          name: 'M&Ms',
          imagePath: '/images/m-and-ms.png',
        },
        {
          name: 'Hot fudge',
          imagePath: '/images/hot-fudge.png',
        },
      ])
    );
  }),
];

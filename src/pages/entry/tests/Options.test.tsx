import { render, screen } from '@testing-library/react';
import Options from '../Options';

describe('Options', () => {
  test('displays image for each scoop option', async () => {
    render(<Options optionType="scoops" />);

    const scoopImages: HTMLImageElement[] = await screen.findAllByRole('img', {
      name: /scoop$/i,
    });
    expect(scoopImages).toHaveLength(2);

    const altText = scoopImages.map((img) => img.alt);
    expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
  });

  test('displays image for each topping option', async () => {
    render(<Options optionType="toppings" />);

    const toppingImages: HTMLImageElement[] = await screen.findAllByRole(
      'img',
      {
        name: /topping$/i,
      }
    );
    expect(toppingImages).toHaveLength(3);

    const altText = toppingImages.map((img) => img.alt);
    expect(altText).toEqual([
      'Cherries topping',
      'M&Ms topping',
      'Hot fudge topping',
    ]);
  });
});

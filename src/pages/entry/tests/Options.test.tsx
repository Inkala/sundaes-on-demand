import { render, screen } from '@testing-library/react';
import Options from '../Options';

describe('Options', () => {
  test('displays image for each scoop option', async () => {
    render(<Options optionType="scoops" />);

    const scoopImages: HTMLImageElement[] = await screen.findAllByRole('img', {
      name: /scoop$/i,
    });
    expect(scoopImages).toHaveLength(2);

    const altText = scoopImages.map((el) => el.alt);
    expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
  });
});
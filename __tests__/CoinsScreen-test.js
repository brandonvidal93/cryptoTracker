import 'react';
import {render, waitFor} from '@testing-library/react-native';
import {CoinsScreen} from '../src/components/coins/CoinsScreen';

let component;

describe('<CoinsScreen />', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              id: '90',
              symbol: 'BTC',
              name: 'Bitcoin',
              nameid: 'bitcoin',
              rank: 1,
              price_usd: '16840.55',
              percent_change_24h: '0.17',
              percent_change_1h: '0.10',
              percent_change_7d: '0.34',
              price_btc: '1.00',
              market_cap_usd: '323709338243.58',
              volume24: 13691322642.332611,
              volume24a: 9016598029.881634,
              csupply: '19222015.00',
              tsupply: '19222015',
              msupply: '21000000',
            },
          ]),
      }),
    );
    component = render(<CoinsScreen />);
  });

  it('Renderiza correctamente', () => {
    waitFor(() => {
      expect(component).toBeDefined();
    });
  });

  it('Renderiza la lista de criptomonedas', () => {
    waitFor(() => {
      const {getByTestId} = component;
      const list = getByTestId('coin-list');

      expect(list).toBeDefined();
    });
  });
});

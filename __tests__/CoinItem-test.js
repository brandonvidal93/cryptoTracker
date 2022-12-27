import 'react';
import React from 'react';
import {render} from '@testing-library/react-native';
import CoinItem from '../src/components/coins/CoinItem';

let component;

const item = {
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
};

describe('<CoinItem />', () => {
  beforeEach(() => {
    component = render(<CoinItem item={item} />);
  });

  it('Renderiza correctamente', () => {
    expect(component).toBeDefined();
  });

  it('Renderiza el simbolo de la criptomoneda', () => {
    const {getByTestId} = component;
    const symbol = getByTestId('txt-symbol');

    expect(symbol).toBeDefined();
    expect(symbol.props.children).toEqual(item.symbol);
  });

  it('Renderiza el nombre de la criptomoneda', () => {
    const {getByTestId} = component;
    const name = getByTestId('txt-name');

    expect(name).toBeDefined();
    expect(name.props.children).toEqual(item.name);
  });

  it('Renderiza la imagen de arrow_up', () => {
    const {getByTestId} = component;
    const arrowUp = getByTestId('img-arrow');

    expect(arrowUp).toBeDefined();
    expect(arrowUp.props.source).toEqual(
      require('cryptoTracker/src/assets/images/arrow_up.png'),
    );
  });

  it('No renderiza la imagen de arrow_down', () => {
    const {queryByTestId} = component;
    const arrowDown = queryByTestId('img-arrow');

    expect(arrowDown.props.source).not.toEqual(
      require('cryptoTracker/src/assets/images/arrow_down.png'),
    );
  });
});

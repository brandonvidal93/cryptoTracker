describe('Example', () => {
  beforeAll(async () => {
    // // mock for markets
    // await device.mockRequest('GET',
    //   'https://api.coinlore.net/api/coin/markets/?id=90', {
    //     status: 200,
    //     body: {
    //       data: [
    //         {
    //           id: 1,
    //           name: 'Bitcoin',
    //           symbol: 'BTC',
    //           rank: 1,
    //           price_usd: '1',
    //           price_btc: '1',
    //           '24h_volume_usd': '1',
    //           market_cap_usd: '1',
    //           available_supply: '1',
    //           total_supply: '1',
    //           max_supply: '1',
    //           percent_change_1h: '1',
    //           percent_change_24h: '1',
    //           percent_change_7d: '1',
    //           last_updated: '1',
    //           price_eur: '1',
    //           '24h_volume_eur': '1',
    //           market_cap_eur: '1',
    //         },
    //       ],
    //     },
    //   },
    // );
    await device.launchApp({newInstance: true});
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Debería acceder a la lista de favoritos', async () => {
    await element(by.label('Favorites')).tap();
    await expect(element(by.text(`You don't have any favorite yet`))).toBeVisible();
  });

  it('Deberia hacer tap sobre el primer elemento de la FlatList y agregar a favoritos', async () => {
    await element(by.id('item-90')).tap();
    await element(by.id('btn-favorite')).tap();
  });

  it('Debería acceder a la lista de favoritos y borrar la moneda agregada', async () => {
    await element(by.label('Favorites')).tap();

    await element(by.id('item-90')).tap();

    await element(by.id('btn-favorite')).tap();

    await element(by.text('Remove')).tap();

    await element(by.label('Favorites')).tap();

    await expect(element(by.text(`You don't have any favorite yet`))).toBeVisible();
  });
});

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  // hacer tap sobre el primer elemento de la lista
  it('Deberia hacer tap sobre el primer elemento de la lista', async () => {
    await element(by.id('list')).atIndex(0).tap();
    await expect(element(by.id('list'))).toBeVisible();
  });
});

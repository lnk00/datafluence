import PingResolver from './ping.resolver';

describe('Ping Resolver', () => {
  test('Resolver should return the message properly', () => {
    expect(PingResolver()).toStrictEqual({ message: 'pong' });
  });
});

import { createMockContext } from '@shopify/jest-koa-mocks';
import { Context } from 'koa';
import PingHandler from './ping.handler';

describe('Ping Handler', () => {
  let ctx: Context;

  beforeEach(() => {
    ctx = createMockContext();
  });

  test('Handler should set the context body properly', () => {
    PingHandler(ctx);
    expect(ctx.body).toStrictEqual({ message: 'pong' });
  });
});

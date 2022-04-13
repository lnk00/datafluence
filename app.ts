import Koa from 'koa';
import Router from 'koa-router';
import Cors from '@koa/cors';
import Logger from 'koa-logger';
import GraphQl from './src/graphql';
import PingHandler from './src/handlers/ping.handler';

const app = new Koa();
const router = new Router();
const cors = Cors();
const logger = Logger();

router.all('/graphql', GraphQl);
router.get('/ping', PingHandler.bind(this));

app.use(cors);
app.use(logger);
app.use(router.routes());
app.use(router.allowedMethods());

if (import.meta.env.PROD) {
  app.listen(3000);
}

// eslint-disable-next-line import/prefer-default-export
export const apiTemplate = app;

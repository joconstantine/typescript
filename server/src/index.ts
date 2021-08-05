import express from 'express';
import cookieSession from 'cookie-session';

import './controllers/LoginController';
import './controllers/RootController';
import { AppRouter } from './AppRouter';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['sdfewrfbcbgfgfh'] }));
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

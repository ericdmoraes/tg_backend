import { Router } from 'express';
import Controller from './app/controllers/UsersController';

const routes = new Router();
const baseUrl = '/api/v1/users';

routes.post(baseUrl, Controller.index);

export default routes;

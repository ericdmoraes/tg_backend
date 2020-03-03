import { Router } from 'express';

// Middlewares
import authMiddleware from './app/middlewares/auth';

// Controllers
import UserController from './app/controllers/UsersController';
import SessionController from './app/controllers/SessionController';

// Router
const routes = new Router();

// Base URL
const baseUrl = '/api/v1';

// Users
routes.post(`${baseUrl}/users/`, authMiddleware, UserController.index);
routes.post(`${baseUrl}/users/create`, UserController.store);

// Session
routes.post(`${baseUrl}/session`, SessionController.store);

export default routes;

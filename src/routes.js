import { Router } from 'express';

// Middlewares
import authMiddleware from './app/middlewares/auth';

// Controllers
import UserController from './app/controllers/UsersController';
import SessionController from './app/controllers/SessionController';
import SubjectController from './app/controllers/SubjectController';

// Router
const routes = new Router();

// Base URL
const baseUrl = '/api/v1';

// #region no auth routes
// Users
routes.post(`${baseUrl}/users/create`, UserController.store);
// Session
routes.post(`${baseUrl}/session`, SessionController.store);
// #endregion no auth routes

// #region auth routes
routes.use(authMiddleware);
// List users
routes.post(`${baseUrl}/users/`, UserController.index);
// Create subject
routes.post(`${baseUrl}/subject/`, SubjectController.store);

export default routes;

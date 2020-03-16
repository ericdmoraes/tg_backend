import { Router } from 'express';

// Middlewares
import authMiddleware from './app/middlewares/auth';
import isTeacher from './app/middlewares/isTeacher';

// Controllers
import UserController from './app/controllers/UsersController';
import SessionController from './app/controllers/SessionController';
import SubjectController from './app/controllers/SubjectController';
import TopicController from './app/controllers/TopicController';
import TestController from './app/controllers/TestController';

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
routes.post(`${baseUrl}/subject/`, isTeacher, SubjectController.store);
// Create topic
routes.post(`${baseUrl}/topic/`, isTeacher, TopicController.store);
// Create test
routes.post(`${baseUrl}/test/`, isTeacher, TestController.store);

export default routes;

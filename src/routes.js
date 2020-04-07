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
import QuestionController from './app/controllers/QuestionController';

// Router
const routes = new Router();

// Base URL
const basePrefix = '/api/v1';

// #region no auth routes
routes.get('/teste', (req, res) => {
  return res.json({ ok: 'ok' });
});
// Users
routes.post(`${basePrefix}/users/create`, UserController.store);
// Session
routes.post(`${basePrefix}/session`, SessionController.store);
// #endregion no auth routes

// #region auth routes
routes.use(authMiddleware);

// Users
routes.post(`${basePrefix}/users/`, UserController.index);

// Subjects
routes.post(`${basePrefix}/subject/`, isTeacher, SubjectController.store);
routes.post(`${basePrefix}/subject/list`, isTeacher, SubjectController.index);

// Topics
routes.post(`${basePrefix}/topic/`, isTeacher, TopicController.store);
routes.post(`${basePrefix}/topic/list`, isTeacher, TopicController.index);

// Tests
routes.post(`${basePrefix}/test/`, isTeacher, TestController.store);
routes.post(`${basePrefix}/test/list`, isTeacher, TestController.index);

// Questions
routes.post(`${basePrefix}/question/`, isTeacher, QuestionController.store);
routes.post(`${basePrefix}/question/list`, isTeacher, QuestionController.index);
// #endregion auth routes

export default routes;

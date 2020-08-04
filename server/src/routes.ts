import express from 'express';
import ClassesControllers from './controllers/ClassesControllers';
import ConnectionsControllers from './controllers/ConnectionsCotrollers';

const routes = express.Router();
const classesControllers = new ClassesControllers();
const connectionsControllers = new ConnectionsControllers();


routes.post('/classes', classesControllers.create);
routes.get('/classes', classesControllers.index);

routes.post('/connections', connectionsControllers.create);
routes.get('/connections', connectionsControllers.index);

export default routes;
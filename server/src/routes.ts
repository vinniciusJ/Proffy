import express from 'express'

import ClassesControler from './Controllers/ClassesController'
import ConnectionsController from './Controllers/ConnectionsController'

const routes = express.Router()

const classesController = new ClassesControler()
const connectionsController = new ConnectionsController()

routes.post('/classes', classesController.create)
routes.post('/connections', connectionsController.create)

routes.get('/classes', classesController.index)
routes.get('/connections', connectionsController.index)


export default routes
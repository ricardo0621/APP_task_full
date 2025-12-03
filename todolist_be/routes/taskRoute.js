
import { Router } from 'express';
import taskController from '../controllers/taskController.js';
import validate from '../midlewares/validate.js';


const router = Router();
router.use(validate.validateToken);
router.get('/', validate.validateRole(['administrador', 'estudiante']), taskController.getTask);
router.post('/', validate.validateRole(['administrador', 'profesor']), taskController.createTask);
router.put('/:id', validate.validateRole(['administrador', 'profesor']), taskController.updateTask);
router.delete('/:id', validate.validateRole(['administrador']), taskController.deleteTask);



export default router;





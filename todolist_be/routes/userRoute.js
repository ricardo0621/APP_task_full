
import { Router } from 'express';
import userController from '../controllers/userController.js'; 
import validate from '../midlewares/validate.js';


const router = Router();

// Rutas protegidas por token
router.get('/',validate.validateRole(['administrador']), validate.validateToken, userController.getUser);
router.post('/',validate.validateRole(['administrador']), validate.validateToken, userController.createUser);
router.put('/:id',validate.validateRole(['administrador']), validate.validateToken, userController.updateUser);
router.delete('/:id',validate.validateRole(['administrador']), validate.validateToken, userController.deleteUser);

// Login NO se protege (para que cualquier usuario pueda iniciar sesión)
router.post('/login', userController.login);



export default router;





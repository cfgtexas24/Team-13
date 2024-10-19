import express from 'express';
import { getEmployeeById } from './controllers/EmployeeController.js';
import { getApplicationsById } from './controllers/EmployeeController.js';

const router = express.Router();

router.get('/getEmployeeById/:id', getEmployeeById);
router.get('/getApplicationsById/:id', getApplicationsById);

export default router;
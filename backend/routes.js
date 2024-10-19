import express from 'express';
import { getEmployeeById } from './controllers/EmployeeController.js';
import { getEmployerById } from './controllers/EmployerController.js';

const router = express.Router();


// Employee routes
router.get('/getEmployeeById/:id', getEmployeeById);


// Employer routes
router.get('/getEmployerById/:id', getEmployerById);

export default router;
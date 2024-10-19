import express from 'express';
import { getEmployeeById } from './controllers/EmployeeController.js';
import { getApplicationById } from './controllers/EmployeeController.js';
// import { getAllApplications } from './controllers/EmployeeController.js';

const router = express.Router();

router.get('/getEmployeeById/:id', getEmployeeById);
router.get('/getApplicationById/:employeeId/:applicationId', getApplicationById);
// router.get('getAllApplications', getAllApplications);

export default router;
import express from 'express';
import { getEmployeeById } from './controllers/EmployeeController.js';

const router = express.Router();


router.get('/getEmployeeById', getEmployeeById);

export default router;
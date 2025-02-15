import express from 'express';
import { getAllCars, getCarById, createCar } from '../controllers/carController.js';

const router = express.Router();

router.get('/cars', getAllCars);
router.get('/cars/:id', getCarById);
router.post('/cars', createCar);
router.put('/cars/:id');
router.delete('/cars/:id');

export default router;
import express from 'express';

import { createAluno, getAlunos, getAluno, deleteAluno, updateAluno } from '../controllers/alunos.js';

const router = express.Router();

router.get('/', getAlunos);

router.post('/', createAluno);

router.get('/:id', getAluno);

router.delete('/:id', deleteAluno);

router.patch('/:id', updateAluno);  

export default router; 
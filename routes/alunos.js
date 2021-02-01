import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

//const alunos = [
    //{
        //firstName: "Nayara",
        //LastName: "de Souza",
        //age: 29,
        //course: "design"
    //},
   // {
        //firstName: "Rodrigo",
        //LastName: "Topan",
        //age: 21,
        //course: "ADS"
    //}
//]

    let alunos = []; //cosnt vai dar erro

// all routes in here are starting with /alunos
router.get('/', (req, res) =>  {
    
    res.send(alunos);
});

router.post('/', (req, res) =>  {
    const aluno = req.body;

    const alunoId = uuidv4();
    const alunoWithId = { ...aluno, id: alunoId};
    
    alunos.push(alunoWithId);

    res.send(`Student with the name ${aluno.firstName} added to the database!`);
});

// /alunos/2 => req.params
router.get('/:id', (req, res) =>  {
    const { id } = req.params;
    const foundAluno = alunos.find((aluno) => aluno.id === id);  
    res.send(foundAluno);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    // id to delete 123
    //Lucca 123
    //Lucas 321
    alunos = alunos.filter((aluno) => aluno.id !== id); //delete false ones (123 != 123...no...so delele)
    
    res.send(`Aluno with the id ${id} was deleted from the database.`);
});

export default router; 
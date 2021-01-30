import express from 'express';

const router = express.Router();

const alunos = [
    {
        firstName: "Nayara",
        LastName: "de Souza",
        age: 29,
        course: "design"
    },
    {
        firstName: "Rodrigo",
        LastName: "Topan",
        age: 21,
        course: "ADS"
    }
]

// all routes in here are starting with /alunos
router.get('/', (req, res) =>  {
    
    res.send(alunos);
});

router.post('/', (req, res) =>  {
    const aluno = req.body;

    alunos.push(aluno);

    res.send('Student with the name ${sluno.firstName} added to the database!');
});

export default router; 
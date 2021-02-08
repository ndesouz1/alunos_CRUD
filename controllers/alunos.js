import { v4 as uuidv4 } from 'uuid';

let alunos = []; //se usar cosnt vai dar erro

export const getAlunos = (req, res) =>  {
    res.send(alunos);
}

export const createAluno = (req, res) =>  {
    const aluno = req.body;
    
    alunos.push({ ...aluno, id: uuidv4() });
    
    res.send(`Aluno with the name ${aluno.firstName} was added to the database.`); 
} 

export const getAluno = (req, res) =>  {
    const { id } = req.params;
    const foundAluno = alunos.find((aluno) => aluno.id === id);
    res.send(foundAluno);  
}

export const deleteAluno = (req, res) => {
    const { id } = req.params;

    alunos = alunos.filter((aluno) => aluno.id !== id); //delete false ones (123 != 123...no...so delele)
    
    res.send(`Aluno with the id ${id} was deleted from the database.`);
}

export const updateAluno = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age, course } = req.body;
    const aluno = alunos.find((aluno) => aluno.id === id);

    if (firstName) aluno.firstName = firstName;
    if (lastName) aluno.lastName = lastName;
    if (age) aluno.age = age;
    if (course) aluno.course = course;
    
    res.send(`Aluno with the id ${id} has been updated`);
}



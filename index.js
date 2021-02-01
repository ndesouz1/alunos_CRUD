import express from 'express';
import bodyParser from 'body-parser';

import alunosRoutes from './routes/alunos.js';

const app = express();
const PORT = 500;

app.use(bodyParser.json());

app.use('/alunos', alunosRoutes);

app.get('/', (req, res) => res.send('Hello from Homepage.'));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));


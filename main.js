const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const users = [
    {
        id: 1,
        name: "Daniel Felipe",
        lastName: "Martín Franco",
        email: "danielmafr@unisabana.edu.co",
        idSabana: "0000289115"
    },
    {
        id: 2,
        name: "John Jairo",
        lastName: "Rojas Vergara",
        email: "johnrove@unisabana.edu.co",
        idSabana: "0000282452"
    }
];

app.get('/user-info/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id < 1 || id > 2) {
        return res.status(400).json({ error: "El ID no es valido, debe ser 1 o 2." });
    }
    const user = users.find(user => user.id === id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: "El estudiante no se encontró." });
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

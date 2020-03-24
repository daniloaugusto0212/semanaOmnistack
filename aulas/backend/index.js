const express = required('express');

const app = express();

app.get('/', (request, response) =>{
    return response.json({
        evento:'Semana Omnistack 11.0',
        aluno: 'Danilo Augusto'
    }); 
});

app.listen(3333);
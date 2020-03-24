const express = require('express');

const app = express();

app.use(express.json());

/**
 * Rota /Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/listar informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar informações no bach-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros
   * 
   * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
    */

app.post('/users', (request, response) =>{
    const body = request.body;
    
    console.log(body);

    return response.json({
        evento:'Semana Omnistack 11.0',
        aluno: 'Danilo Augusto'
    }); 
});

app.listen(3332);
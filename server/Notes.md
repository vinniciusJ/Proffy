# CONCEITOS BACK-END

## Métodos HTTP

* __GET__: Buscar ou listar uma informação
* __POST__: Criar alguma nova informação
* __PUT__: Atualizar uma informação existente
* __DELETE__: Deletar uma informação existente

## Parâmetros de requisição

* __Request Body__: Dados para a criação ou atualização de um registro
* __Routes Params__: Identificar qual recurso a requisição quer atualizar ou deletar. Ex.: `'/users/:id'`
* __Query Params__: Paginação, filtração, ordenação, ...

## Funcionalidades

### Conexões

* Rota para listar o total de conexões realizadas
* Rota para criar uma nova conexão

### Aulas

* Rota para criar uma aula
* Rota para listar aulas
    * Filtrar por _matéria_, _dia da semana_ e _horário_

## Observações

* O _Browser_ somente faz requisições usando o método `GET`
* O `expresses`, à principio, não entende dados no formato `JSON`, portanto é necessário especificar que o dados que chegarão na requisição são dessa estrutura com a seguinte linha `app.use(express.json())`

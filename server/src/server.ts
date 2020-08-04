import express, { request, response, json } from 'express'

const app = express()

app.get('/', (request, response) => {
    return response.json({message: 'Hello world'})
})

app.listen(3333)
//localhost:3333
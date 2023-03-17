import express from 'express'
import cors from 'cors'
const app = express()



app.use(cors())
import { getRegistros, createRegistro, deleteRegistros } from './database.js'

app.get("/registros", async (req, res) =>{
    const result = await getRegistros()
    res.send(result)
})

app.get("/registrar/:tipo", async(req, res) => {
    const tipo = req.params.tipo;
    console.log(tipo)
    await createRegistro(tipo);
    res.send("registrar")
})

app.get("/eliminar", async(req, res) => {
    await deleteRegistros();
    res.send("Eliminado")
})

app.use((err, req,res, next ) =>{
    console.error(err.stack)
    res.status(500).send("something broke!")
})

app.listen(8080, ()=>{
    console.log("Server runing on port 8080")
})